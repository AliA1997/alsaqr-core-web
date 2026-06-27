// Shared auth-related TypeScript models used across all 3 AlSaqr projects.
// Ported from the reference repo's typings.d.ts and src/models/users.ts
// (auth-related only — see CLAUDE.md). Declared as an ambient `typings` module
// so consumers and internal code can `import { User } from "typings"`.

declare module "typings" {
  export interface ProfileUser {
    userId: string;
    username: string;
    firstName: string;
    lastName?: string;
    avatar?: string;
    bgThumbnail?: string;
    bannerImage?: string;
    bio?: string;
    dateOfBirth?: Date;
    createdAt: Date;
    updatedAt?: Date;
    bookmarks: string[];
    bookmarkCount: number;
    following?: object[];
    followingCount: number;
    followers?: object[];
    followerCount: number;
  }

  export interface UserItemToDisplay {
    id: string;
    username: string;
    avatar?: string;
    bgThumbnail?: string;
    bio?: string;
    firstName?: string;
    lastName?: string;
    bannerImage?: string;
    countryOfOrigin?: string;
    preferredMadhab?: string;
    hobbies: string[];
    favoriteQuranReciters: string[];
    favoriteIslamicScholars: string[];
    islamicStudyTopics: string[];
    followingCount: number;
    followerCount: number;
    totalItems: number;
  }

  export interface UserRegisterFormDto extends UserRegisterForm {
    followingUsers: string[];
  }

  export interface UserRegisterForm extends UserInfo {
    firstName: string;
    lastName: string;
    dateOfBirth?: Date;
    maritalStatus?: "single" | "married" | "divorced" | "widowed";
    hobbies?: string[];
    religion?: string;
    countryOfOrigin?: string;
    followingUsers: UserItemToDisplay[];
  }

  export interface User extends UserInfo {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    firstName?: string;
    lastName?: string;
    dateOfBirth?: Date;
    geoId?: string;
    maritalStatus?: "single" | "married" | "divorced" | "widowed";
    hobbies?: string[];
    religion?: string;
    preferredMadhab?: string;
    frequentMasjid?: string;
    favoriteQuranReciters?: string[];
    favoriteIslamicScholars?: string[];
    islamicStudyTopics?: string[];
    following: {
      avatar?: string;
      bio?: string;
      username?: string;
      userId?: string;
    }[];
    followingCount: number;
    followers: {
      avatar?: string;
      bio?: string;
      username?: string;
      userId?: string;
    }[];
    followerCount: number;
    bookmarks: string[];
    reposts: string[];
    likedPosts: string[];
    isCompleted: boolean;
    verified: boolean;
  }

  export type UserInfo = {
    username: string;
    bio?: string;
    countryOfOrigin: string;
    avatar: string;
    bgThumbnail: string;
    email: string;
    phone?: string;
    personalInfo?: PersonalInfo;
    personalInterests?: PersonalInterests;
  };

  export interface PersonalInfo {
    dateOfBirth?: string;
    maritalStatus?: "single" | "married" | "divorced" | "widowed";
  }

  export interface PersonalInterests {
    hobbies?: string[];
    preferredMadhab?: "Hanafi" | "Shafi'i" | "Maliki" | "Hanbali" | "Salafi";
    frequentMasjid?: string;
    favoriteQuranReciters?: string[];
    favoriteIslamicScholars?: string[];
    islamicStudyTopics?: string[];
  }

  // Auth-related user form DTOs (ported from src/models/users.ts).
  export interface FollowUserFormDto {
    userToFollowId: string;
  }

  export interface UnFollowUserFormDto {
    userToUnFollowId: string;
  }

  export interface UpdateUserForm {
    id: string;
    firstName: string;
    lastName: string;
    avatar: string;
    bgThumbnail: string;
    dateOfBirth?: Date;
    username: string;
    bio: string;
    religion: string;
    maritalStatus?: "single" | "married" | "divorced" | "widowed";
    hobbies?: string[];
    countryOfOrigin?: string;
    preferredMadhab?:
      | "Hanafi"
      | "Shafi'i"
      | "Maliki"
      | "Hanbali"
      | "Salafi"
      | "Prefer Not To Disclose";
    frequentMasjid?: string;
    favoriteQuranReciters?: string[];
    favoriteIslamicScholars?: string[];
    islamicStudyTopics?: string[];
  }

  export interface UpdateUserFormDto extends UpdateUserForm {}

  export interface ServerError {
    statusCode: number;
    message: string;
    details: string;
  }
}
