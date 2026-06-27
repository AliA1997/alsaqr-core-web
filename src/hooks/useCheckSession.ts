// useCheckSession. Ported from the reference repo's src/hooks/useCheckSession.ts.
// Syncs the Supabase session with the backend on mount and on route/user change:
// signs the session in, then re-checks it, and pushes the result into the caller's
// state setter. Uses core-web's lazy supabase client and the in-project userApiClient.
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSupabase } from "../supabase";
import { userApiClient } from "../api/userApiClient";
import type { User } from "../typings";

export function useCheckSession(
  setState: (user: User | undefined) => void,
  sessionUser: User | undefined | null
) {
  const { pathname } = useLocation();

  async function getSetSession() {
    const sessionInfo = await getSupabase().auth.getSession();

    if (sessionInfo && sessionInfo.data.session) {
      const email = sessionInfo.data.session.user.email!;
      await userApiClient.sessionSignin(email);
      const checkData = await userApiClient.sessionCheck(email);
      if (checkData) setState(checkData.result);
    } else {
      setState(undefined);
    }
  }

  useLayoutEffect(() => {
    getSetSession();
  }, [sessionUser?.id, pathname]);

  return {};
}
