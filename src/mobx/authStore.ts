// authStore — the ONLY store copied over from the reference repo (see CLAUDE.md).
// Ported from src/stores/authStore.ts with core-web-local imports.
import { makeAutoObservable, runInAction } from "mobx";
import { User, UserRegisterForm, UserRegisterFormDto } from "typings";
import Auth from "../auth";
import agent from "../api/agent";
import { DEFAULT_USER_REGISTRATION_FORM, inTestMode } from "../constants";
import { getConfigSafe } from "../config";
import { testAuthUser } from "../testing/testData";

export default class AuthStore {
  processingUserCheck: boolean = false;
  currentSessionUser: User | undefined = undefined;
  auth: Auth | undefined = undefined;

  loadingRegistration: boolean = false;
  loadingUpsert: boolean = false;
  currentStepInUserRegistration: number | undefined = 0;
  currentRegistrationForm: UserRegisterForm = DEFAULT_USER_REGISTRATION_FORM;

  constructor() {
    this.auth = new Auth();
    makeAutoObservable(this);
  }

  initializeFromStorage = async () => {
    if (!this.auth) this.auth = new Auth();

    if (inTestMode()) {
      this.auth.setUser(testAuthUser);
      this.setCurrentSessionUser(testAuthUser);
    } else if (!inTestMode() && this.auth?.isTestUser()) {
      this.resetAuthState();
      return;
    } else {
      const loggedInUser = this.auth?.getUser();

      if (loggedInUser) {
        this.setCurrentSessionUser(loggedInUser);
        return loggedInUser.id;
      }
      return this.currentSessionUser?.id;
    }
  };

  setProcessingUserCheck = (val: boolean) => {
    this.processingUserCheck = val;
  };
  setLoadingRegistration = (val: boolean) => {
    this.loadingRegistration = val;
  };
  setLoadingUpsert = (val: boolean) => {
    this.loadingUpsert = val;
  };
  setCurrentStepInUserRegistration = (val: number | undefined) => {
    this.currentStepInUserRegistration = val;
  };
  setCurrentRegistrationForm = (val: UserRegisterForm) => {
    this.currentRegistrationForm = val;
  };

  setCurrentSessionUser = (currentUserPayload: User | undefined) => {
    this.currentSessionUser = currentUserPayload;
    if (currentUserPayload) this.auth?.setUser(currentUserPayload);
  };

  navigateBackToHome = () => {
    window.location.href = `${getConfigSafe()?.baseUrl ?? "/"}`;
  };

  resetAuthState = () => {
    if (this.auth) {
      this.auth?.clearToken();
      this.auth?.clearUser();
    }
    this.currentSessionUser = undefined;
  };

  completeRegistration = async (
    userId: string,
    registerForm: UserRegisterForm
  ) => {
    this.setLoadingRegistration(true);
    try {
      const registerFormDto: UserRegisterFormDto = {
        ...registerForm,
        followingUsers: registerForm.followingUsers.map((u) => u.id),
      };

      (await agent.userApiClient.completeRegistration(userId, registerFormDto)) ??
        {};

      runInAction(() => {
        this.setCurrentRegistrationForm(DEFAULT_USER_REGISTRATION_FORM);
        this.setCurrentStepInUserRegistration(0);
      });
    } finally {
      this.setLoadingRegistration(false);
    }
  };
}
