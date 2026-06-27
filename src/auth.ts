// Cookie-backed auth helper. Ported from the reference repo's src/utils/auth.ts.
import Cookies from "universal-cookie";
import type { User } from "./typings";
import { testAuthUser } from "./testing/testData";

export default class Auth {
  private cookie: Cookies;

  constructor(cookie?: Cookies) {
    this.cookie = cookie ?? new Cookies();
  }

  getToken(key: string = "jwt"): string | null {
    return this.cookie.get(key) || null;
  }

  setToken(value: string, key: string = "jwt") {
    const expires = new Date();
    expires.setDate(expires.getDate() + 3);
    this.cookie.set(key, value, {
      path: "/",
      expires,
      secure: true,
      sameSite: "strict",
    });
  }

  setUser(value: User, key: string = "user") {
    const expires = new Date();
    expires.setDate(expires.getDate() + 3);
    this.cookie.set(key, JSON.stringify(value), {
      path: "/",
      expires,
      secure: true,
      sameSite: "strict",
    });
  }

  getUser(key: string = "user"): User | null {
    return this.cookie.get(key)
      ? JSON.parse(JSON.stringify(this.cookie.get(key)))
      : null;
  }

  isLoggedIn() {
    return !!this.cookie.get("user");
  }

  isTestUser() {
    return this.isLoggedIn() && this.getUser()?.email === testAuthUser.email;
  }

  clearUser() {
    return this.cookie.remove("user");
  }

  clearToken(key: string = "jwt") {
    this.cookie.remove(key);
  }
}
