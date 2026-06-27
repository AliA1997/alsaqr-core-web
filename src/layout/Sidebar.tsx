// Sidebar. Adapted from the three tenant repos into one data-driven component:
// the link set is chosen by `appType` (default | meetup | zook). User-related
// links (the profile block) are intentionally excluded. Modal triggers are
// delegated to the app via `onShowModal` (constraint: only authStore in core-web).
import { Fragment, useState } from "react";
import {
  DotsCircleHorizontalIcon,
  LoginIcon,
  LogoutIcon,
  CogIcon,
} from "@heroicons/react/outline";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { useStore } from "../mobx";
import { getSupabase } from "../supabase";
import { getConfigSafe } from "../config";
import { SIDEBAR_LINKS, type AppType, type SidebarLink } from "../constants";
import SidebarRow from "./SidebarRow";
import DarkSwitch from "./DarkSwitch";

type SidebarProps = {
  appType?: AppType;
  /** Called for modal-triggering links: "login" or a link's `modalKey`. */
  onShowModal?: (key: string) => void;
};

const SideBar = ({ appType = "default", onShowModal }: SidebarProps) => {
  const navigate = useNavigate();
  const { authStore } = useStore();
  const { currentSessionUser, resetAuthState } = authStore;
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const onLinkClick = (link: SidebarLink) => {
    if (link.modalKey) return onShowModal?.(link.modalKey);
    if (link.requiresAuth && !currentSessionUser) return onShowModal?.("login");
    if (link.externalUrlKey) {
      const url = getConfigSafe()?.[link.externalUrlKey];
      if (url) window.location.href = url;
      return;
    }
    if (link.href) navigate(link.href);
  };

  const onSignOut = async () => {
    resetAuthState();
    await getSupabase().auth.signOut();
  };

  const onSettings = () => {
    if (appType === "default") navigate("/settings");
    else window.location.href = `${getConfigSafe()?.baseUrl ?? ""}settings`;
  };

  const links = SIDEBAR_LINKS[appType];
  let lastGroup: string | undefined;

  return (
    <div
      className="col-span-1 md:col-span-2 flex flex-col item-center mt-2 md:mt-0 md:px-4 md:items-start overflow-y-auto scrollbar-hide max-h-[90vh]"
      onClick={() => setIsDropdownOpen(false)}
    >
      <div className="flex justify-start">
        <img
          data-testid="navlogo"
          className="m-0 h-full w-full md:w-[90%] transition-all duration-200 sidebarLogo cursor-pointer"
          alt=""
          style={{ maxWidth: "unset" }}
          onClick={() => navigate("/")}
        />
      </div>

      {links.map((link) => {
        const header =
          link.group && link.group !== lastGroup ? (
            <p className="px-4 pt-3 pb-1 text-xs font-bold uppercase opacity-60 dark:text-gray-50">
              {link.group}
            </p>
          ) : null;
        lastGroup = link.group;
        return (
          <Fragment key={link.title}>
            {header}
            <SidebarRow
              title={link.title}
              iconSrc={link.iconSrc}
              onClick={() => onLinkClick(link)}
            />
          </Fragment>
        );
      })}

      <div className="relative more-container">
        <SidebarRow
          Icon={DotsCircleHorizontalIcon}
          title="More"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg ring-1 bg-white dark:bg-[#000000] ring-black ring-opacity-5 z-[950]">
            <div className="py-1" role="menu" aria-orientation="vertical">
              {currentSessionUser ? (
                <>
                  <SidebarRow
                    Icon={CogIcon}
                    title="Settings"
                    isShow={true}
                    onClick={onSettings}
                  />
                  <SidebarRow Icon={LogoutIcon} title="Sign Out" isShow={true} onClick={onSignOut} />
                </>
              ) : (
                <SidebarRow
                  Icon={LoginIcon}
                  title="Sign In"
                  isShow={true}
                  onClick={() => onShowModal?.("login")}
                />
              )}
            </div>
          </div>
        )}
      </div>

      <DarkSwitch />
    </div>
  );
};

export default observer(SideBar);
