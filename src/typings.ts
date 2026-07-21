export type CommonRecordBody = {
  text: string;
  image?: string;
};

export interface NotificationRecord extends CommonRecordBody {
  notificationId: string;
  userId: string;
  notificationMessage: string;
  notificationType: string;
  isRead: boolean;
  link?: string;
  relatedUserId?: string;
  postId?: string;
  communityId?: string;
  communityDiscussionId?: string;
  communityDiscussionMessageId?: string;
  listId?: string;
  listItemId?: string;
  notificationCreatedAt: string;
  notificationUpdatedAt: string;
}


export interface NotificationToDisplay extends NotificationRecord {}

export interface ServerError {
  statusCode: number;
  message: string;
  details: string;
}



export interface MessageFormDto {
  senderId: string;
  senderProfileImg?: string;
  senderUsername?: string;
  recipientId?: string;
  recipientProfileImg?: string;
  recipientUsername?: string;
  text: string;
  image?: string;
}

export interface MessageRecord extends CommonRecordBody {
  messageId: string;
  senderId?: string;
  senderUsername?: string;
  senderAvatar?: string;
  recipientId?: string;
  recipientAvatar?: string;
  recipientUsername?: string;
  messageContent?: string;
  messageMedia?: string;
  isRead?: boolean;

  messageCreatedAt: Date;
  messageUpdatedAt: Date;
}

export interface MessageToDisplay extends MessageRecord {}

export interface MessageHistoryToDisplay {
  id: string;
  receiverId: string;
  receiverProfileImage: string
  receiverUsername: string;
  messageCount: any;
  lastMessageDate: any;
}
// Shared auth-related TypeScript models used across all 3 AlSaqr projects.
// Ported from the reference repo's typings.d.ts and src/models/users.ts
// (auth-related only — see CLAUDE.md). A real module (not an ambient
// `declare module`) so the rolled-up declaration file is self-contained and
// resolvable by consumers.

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
  hobbies: string[];
  followingCount: number;
  followerCount: number;
  totalItems: number;
}

export interface UserRegisterFormDto
  extends Omit<UserRegisterForm, "followingUsers"> {
  followingUsers: string[];
}

export interface UserRegisterForm extends Omit<UserInfo, "countryOfOrigin"> {
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
}

export interface ServerError {
  statusCode: number;
  message: string;
  details: string;
}



export interface UserIpInfo {
  locationDisplayName: string;
  latitude: number;
  longitude: number;
}