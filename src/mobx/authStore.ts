import { makeAutoObservable, runInAction } from "mobx";
import type { User, UserIpInfo, UserRegisterForm, UserRegisterFormDto } from "../typings";
import Auth from "../auth";
import agent from "../api/agent";
import { DEFAULT_USER_REGISTRATION_FORM, inTestMode } from "../constants";
import { getConfigSafe } from "../config";
import { testAuthUser } from "../testing/testData";

export default class AuthStore {
  processingUserCheck: boolean = false;
  currentSessionUser: User | undefined = undefined;
  auth: Auth | undefined = undefined;
  userIpInfo: UserIpInfo | undefined = undefined;

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


  setUserIpInfo = (data: UserIpInfo | undefined) => {
    this.userIpInfo = data;
  }

  loadIpInfo = async () => {
    if(!this.auth)
      this.auth = new Auth();

    if(!this.auth?.getUserIpInfo()) {
      const ipData = await agent.locationApiClient.getIpAddress();
      const newUserIpInfo = {
        locationDisplayName: `${ipData.city}, ${ipData.country_name}`,
        latitude: ipData.latitude,
        longitude: ipData.longitude
      };

      this.auth?.setUserIpInfo(newUserIpInfo);
      this.setUserIpInfo(newUserIpInfo);
      console.log("user IP DATA:", this.userIpInfo);
    } else {

      this.setUserIpInfo(this.auth.getUserIpInfo()!);
    }
  }

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
