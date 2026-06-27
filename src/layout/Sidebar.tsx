// Sidebar. Adapted from the three tenant repos into one data-driven component:
// the link set is chosen by `appType` (default | meetup | zook). User-related
// links (the profile block) are intentionally excluded. Modal triggers are
// delegated to the app via `onShowModal` (constraint: only authStore in core-web).
import { Fragment, useEffect, useLayoutEffect, useState } from "react";
import {
  DotsCircleHorizontalIcon,
  LoginIcon,
  LogoutIcon,
  CogIcon,
} from "@heroicons/react/outline";
import { observer } from "mobx-react-lite";
import { useLocation, useNavigate } from "react-router-dom";
import { useStore } from "../mobx";
import { getSupabase } from "../supabase";
import { getConfigSafe } from "../config";
import { SIDEBAR_LINKS, type AppType, type SidebarLink } from "../constants";
import Collapsible from "../components/Collapsible";
import SidebarRow from "./SidebarRow";
import DarkSwitch from "./DarkSwitch";

type SidebarProps = {
  appType?: AppType;
  /** Called for modal-triggering links: "login" or a link's `modalKey`.
   *  `appType` is forwarded so the app can render the right modal variant. */
  onShowModal?: (key: string, appType: AppType) => void;
  /** Routes the user can't access while logged out (e.g. ["/my-groups"]).
   *  On these, the login modal auto-opens — ported from the meetup Sidebar. */
  routesUserCantAccess?: string[];
};

const SideBar = ({
  appType = "default",
  onShowModal,
  routesUserCantAccess = [],
}: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { authStore } = useStore();
  const { auth, currentSessionUser, resetAuthState } = authStore;
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Meetup-case behavior: when on a restricted route and logged out, prompt
  // login; once the session user exists (registration complete), the app closes.
  useLayoutEffect(() => {
    const notLoggedIn = mounted && !auth?.isLoggedIn();
    const onRestrictedRoute = routesUserCantAccess.some((r) =>
      location.pathname.includes(r)
    );
    if (notLoggedIn && onRestrictedRoute) onShowModal?.("login", appType);
  }, [currentSessionUser?.id, mounted, location.pathname]);

  const onLinkClick = (link: SidebarLink) => {
    if (link.modalKey) return onShowModal?.(link.modalKey, appType);
    if (link.requiresAuth && !currentSessionUser)
      return onShowModal?.("login", appType);
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

  // Fold consecutive grouped links into sections so each group renders inside a
  // single Collapsible (e.g. "Location"); ungrouped links render on their own.
  const sections = SIDEBAR_LINKS[appType].reduce<
    Array<{ group?: string; links: SidebarLink[] }>
  >((acc, link) => {
    const last = acc[acc.length - 1];
    if (link.group && last?.group === link.group) last.links.push(link);
    else acc.push({ group: link.group, links: [link] });
    return acc;
  }, []);

  const renderRow = (link: SidebarLink) => (
    <SidebarRow
      key={link.title}
      title={link.title}
      iconSrc={link.iconSrc}
      onClick={() => onLinkClick(link)}
    />
  );

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

      {sections.map((section) =>
        section.group ? (
          <Collapsible key={section.group} title={section.group} defaultOpen>
            {section.links.map(renderRow)}
          </Collapsible>
        ) : (
          <Fragment key={section.links[0].title}>
            {section.links.map(renderRow)}
          </Fragment>
        )
      )}

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
                  onClick={() => onShowModal?.("login", appType)}
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
