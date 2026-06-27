// NEW root MobX store for core-web, used across all AlSaqr projects.
// Per CLAUDE.md, only authStore is copied over; new stores are defined here.
import { createContext, useContext } from "react";
import AuthStore from "./authStore";

export class RootStore {
  authStore: AuthStore;

  constructor() {
    this.authStore = new AuthStore();
  }
}

export const rootStore = new RootStore();

export const StoreContext = createContext<RootStore>(rootStore);

export const useStore = () => useContext(StoreContext);

export { default as AuthStore } from "./authStore";
