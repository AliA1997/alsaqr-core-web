// Auth modals. Ported from the reference repo's src/common/AuthModals.tsx and
// adapted to core-web conventions: the Modal stays prop-driven (no modalStore
// coupling — see Modal.tsx), supabase is the lazy runtime client from
// getSupabase(), and the "routes the user can't leave" set is supplied by the
// consuming app instead of a baked-in constant.
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router-dom";
import { ModalBody, ModalPortal } from "./Modal";
import { useStore } from "../mobx";
import { getSupabase } from "../supabase";
import { getOAuthOptions } from "../constants";

export interface LoginModalProps {
  // Close handler from the consuming app's modalStore.
  onClose: () => void;
  // Routes the user is not allowed to leave while logged out (e.g. ["/register"]).
  // While on one of these the modal stays open unless a session user exists.
  routesUserCantAccess?: string[];
}

const oauthButtonClassNames = `
  flex items-center p-3 border rounded-lg font-medium
  text-gray-600 border-gray-300 hover:bg-gray-100 hover:text-gray-800
  dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white
`;

export const LoginModal = observer(
  ({ onClose, routesUserCantAccess = [] }: LoginModalProps) => {
    const { pathname } = useLocation();
    const { authStore } = useStore();
    const { currentSessionUser } = authStore;

    const signInWith = (provider: "discord" | "google" | "facebook") =>
      getSupabase().auth.signInWithOAuth({
        provider,
        options: getOAuthOptions(),
      });

    const handleClose = () => {
      const canCloseLoginModal = !routesUserCantAccess.some((r) =>
        pathname.includes(r)
      );
      if (canCloseLoginModal || currentSessionUser) onClose();
    };

    return (
      <ModalPortal>
        <ModalBody onClose={handleClose}>
          <div className="flex flex-col justify-center">
            <button
              className={oauthButtonClassNames}
              onClick={() => signInWith("google")}
            >
              <img
                src="/google-icon.svg"
                height={30}
                width={30}
                alt="Google Social Button Icon"
                className="mr-2"
              />
              Sign in with Google
            </button>
            <button
              className={oauthButtonClassNames}
              onClick={() => signInWith("facebook")}
            >
              <img
                src="/facebook-icon.svg"
                height={30}
                width={30}
                alt="Facebook Social Button Icon"
                className="mr-2"
              />
              Sign in with Facebook
            </button>
            <button
              className={oauthButtonClassNames}
              onClick={() => signInWith("discord")}
            >
              <img
                src="/discord-icon.svg"
                height={30}
                width={30}
                alt="Discord Social Button Icon"
                className="mr-2"
              />
              Sign in with Discord
            </button>
          </div>
        </ModalBody>
      </ModalPortal>
    );
  }
);
