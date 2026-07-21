import { Client } from '@gradio/client';
import { Context } from 'react';
import { CSSProperties } from 'react';
import { default as default_2 } from 'universal-cookie';
import { default as default_3 } from 'react';
import { FieldHelperProps } from 'formik';
import { FieldHookConfig } from 'formik';
import { JSX as JSX_2 } from 'react';
import { MouseEventHandler } from 'react';
import { PropsWithChildren } from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { SupabaseClient } from '@supabase/supabase-js';
import { SVGProps } from 'react';

declare const Accordion: ({ items, defaultExpanded, allowMultiple, className, }: Props) => default_3.JSX.Element;
export { Accordion }
export { Accordion as AccordionDefault }

export declare interface AccordionItem {
    title: string;
    jsx: default_3.ReactNode;
}

export declare interface AlSaqrConfig {
    supabaseUrl: string;
    supabaseAnonKey: string;
    apiBaseUrl: string;
    baseUrl?: string;
    zookUrl?: string;
    meetupUrl?: string;
    hfNsfwChecker?: string;
    hfToken?: string;
    testMode?: boolean;
    locationApiUrl?: string;
    locationReverseApiUrl?: string;
}

export declare type AppType = "default" | "meetup" | "zook";

export declare class Auth {
    private cookie;
    constructor(cookie?: default_2);
    getToken(key?: string): string | null;
    setToken(value: string, key?: string): void;
    setUser(value: User, key?: string): void;
    getUser(key?: string): User | null;
    isLoggedIn(): boolean;
    isTestUser(): boolean;
    clearUser(): void;
    clearToken(key?: string): void;
    setUserIpInfo(value: UserIpInfo, key?: string): void;
    getUserIpInfo(key?: string): UserIpInfo | null;
}

export declare class AuthStore {
    processingUserCheck: boolean;
    currentSessionUser: User | undefined;
    auth: Auth | undefined;
    userIpInfo: UserIpInfo | undefined;
    loadingRegistration: boolean;
    loadingUpsert: boolean;
    currentStepInUserRegistration: number | undefined;
    currentRegistrationForm: UserRegisterForm;
    constructor();
    initializeFromStorage: () => Promise<string | undefined>;
    setUserIpInfo: (data: UserIpInfo | undefined) => void;
    loadIpInfo: () => Promise<void>;
    setProcessingUserCheck: (val: boolean) => void;
    setLoadingRegistration: (val: boolean) => void;
    setLoadingUpsert: (val: boolean) => void;
    setCurrentStepInUserRegistration: (val: number | undefined) => void;
    setCurrentRegistrationForm: (val: UserRegisterForm) => void;
    setCurrentSessionUser: (currentUserPayload: User | undefined) => void;
    navigateBackToHome: () => void;
    resetAuthState: () => void;
    completeRegistration: (userId: string, registerForm: UserRegisterForm) => Promise<void>;
}

export declare const ButtonLoader: default_3.NamedExoticComponent<object>;

export declare const CheckboxCard: ({ label, description, icon, ...props }: CheckboxCardProps) => default_3.JSX.Element;

declare type CheckboxCardProps = {
    label: string;
    description?: string;
    icon?: default_3.ReactNode;
} & FieldHookConfig<string>;

export declare const checkNsfwInImage: (client: Client, imageUrl: string) => Promise<any>;

declare const Collapsible: ({ title, defaultOpen, children, className, }: CollapsibleProps) => default_3.JSX.Element;
export { Collapsible }
export { Collapsible as CollapsibleDefault }

declare interface CollapsibleProps {
    title: string;
    defaultOpen?: boolean;
    children: default_3.ReactNode;
    className?: string;
}

export declare const commonAgent: {
    userApiClient: {
        sessionSignin: (oauthData: any) => Promise<any>;
        sessionCheck: (email: string, web3_address?: string) => Promise<any>;
        web3SessionSignin: (web3Address: string) => Promise<any>;
        web3SessionCheck: (web3Address: string) => Promise<any>;
        getUserProfile: (username: string) => Promise<any>;
        getUsersToAdd: (params: URLSearchParams) => Promise<any>;
        getUserProfilePosts: (username: string, params: URLSearchParams) => Promise<any>;
        getUserProfileMediaPosts: (username: string, params: URLSearchParams) => Promise<any>;
        getUserProfileCommunities: (username: string, params: URLSearchParams) => Promise<any>;
        getUserProfileCommunityDiscussions: (username: string, params: URLSearchParams) => Promise<any>;
        getUserProfileGroups: (username: string, params: URLSearchParams) => Promise<any>;
        getUserProfileEvents: (username: string, params: URLSearchParams) => Promise<any>;
        getUserProfileProducts: (username: string, params: URLSearchParams) => Promise<any>;
        completeRegistration: (userId: string, values: UserRegisterFormDto) => Promise<any>;
        followUser: (values: FollowUserFormDto) => Promise<any>;
        unFollowUser: (values: UnFollowUserFormDto) => Promise<any>;
        updateUser: (values: UpdateUserFormDto) => Promise<any>;
        deleteUser: () => Promise<any>;
    };
    subscriptionApiClient: {
        getSubscriptionDailyUse: (params: URLSearchParams | undefined) => Promise<any>;
    };
    productApiClient: {
        getCategories: () => Promise<any>;
        getCategory: (categoryId: number) => Promise<any>;
        addProduct: (values: CreateProductForm) => Promise<any>;
        updateProduct: (values: UpdateProductForm, productId: number) => Promise<any>;
        deleteProduct: (productId: number) => Promise<any>;
        getSellingProducts: (params: URLSearchParams | undefined) => Promise<any>;
        getBuyingProducts: (params: URLSearchParams | undefined) => Promise<any>;
        getNearbyProducts: (params: URLSearchParams | undefined) => Promise<any>;
        getNearbyProductsOnCategory: (params: URLSearchParams | undefined, categoryId: number) => Promise<any>;
        getProduct: (params: URLSearchParams, productId: number) => Promise<any>;
        getSimilarProducts: (params: URLSearchParams, productId: number) => Promise<any>;
    };
    notificationApiClient: {
        getNotifications: (userId: string, params: URLSearchParams | undefined, webWorkerAccessToken?: string) => Promise<any>;
    };
    messageApiClient: {
        loadDirectMessages: (params: URLSearchParams) => Promise<any>;
        sendDirectMessage: (values: MessageFormDto) => Promise<any>;
        loadDirectMessageThreads: (params: URLSearchParams, webWorkerAccessToken?: string) => Promise<any>;
    };
    locationApiClient: {
        getIpAddress: () => Promise<any>;
        reverseLocateAddress: (lat: number, long: number) => Promise<any>;
    };
    exploreApiClient: {
        getExplore: (params: URLSearchParams) => Promise<any>;
        getExploreFromSource: (source: ExploreTabs, params: URLSearchParams) => Promise<any>;
    };
};

declare type CommonImageProps = {
    src: string;
    alt: string;
    classNames?: string;
    onClick?: MouseEventHandler<HTMLImageElement> | undefined;
};

export declare type CommonRecordBody = {
    text: string;
    image?: string;
};

export declare enum CommonUpsertBoxTypes {
    Post = "Post",
    List = "List",
    Community = "Community",
    UpdateCommunity = "Update-Community",
    CommunityDiscussion = "CommunityDiscussion",
    UpdateCommunityDiscussion = "Update-Community-Discussion",
    Register = "Register"
}

export declare function configureAlSaqr(config: AlSaqrConfig): void;

export declare const ConfirmModal: ({ isOpen, title, confirmMessage, children, onClose, confirmFunc, declineButtonText, confirmButtonText, confirmButtonClassNames, }: default_3.PropsWithChildren<ConfirmModalProps>) => default_3.JSX.Element | null;

declare interface ConfirmModalProps {
    isOpen: boolean;
    title: string;
    confirmMessage: string;
    onClose: () => void;
    confirmFunc: () => Promise<void>;
    declineButtonText: string;
    confirmButtonText: string;
    confirmButtonClassNames?: string;
}

export declare function ContentContainer({ children, ...otherProps }: default_3.PropsWithChildren<any>): default_3.JSX.Element;

export declare const ContentContainerWithRef: ({ innerRef, children, classNames, testId, ...otherProps }: default_3.PropsWithChildren<any>) => default_3.JSX.Element;

declare interface CreateProductForm {
    title?: string | undefined;
    description?: string | undefined;
    price?: number | undefined;
    attributes?: {
        [key: string]: any;
    } | undefined;
    productCategoryId?: string | undefined;
    images?: string[] | undefined;
    latitude?: number | undefined;
    longitude?: number | undefined;
    country?: string | undefined;
    tags?: string[] | undefined;
}

export declare const CustomPageLoader: ({ title }: CustomPageLoaderProps) => default_3.JSX.Element;

declare interface CustomPageLoaderProps {
    title: string;
}

export declare function DangerAlert({ title, message, onClose, actions, className, }: DangerAlertProps): default_3.JSX.Element | null;

declare type DangerAlertProps = {
    title?: string;
    message: string;
    onClose?: () => void;
    actions?: default_3.ReactNode;
    className?: string;
};

export declare const DarkSwitch: () => JSX_2.Element;

export declare const DEFAULT_USER_REGISTRATION_FORM: UserRegisterForm;

export declare enum ExploreTabs {
    Popular = "popular",
    AlJazeeraEnglish = "al-jazeera-english",
    Argaam = "argaam",
    BleacherReport = "bleacher-report",
    CryptoCoinsNews = "crypto-coins-news",
    HackerNews = "hacker-news",
    SABQ = "sabq"
}

export declare const FALLBACK_IMAGE_URL = "https://res.cloudinary.com/aa1997/image/upload/v1720130142/Web3-Client-Projects/Gm.png";

export declare const FALLBACK_NEWS_IMAGE_URL = "/explore-news-placeholder.svg";

export declare const FALLBACK_POST_IMAGE_URL = "/post-placeholder.svg";

export declare function FallbackImage({ src, alt, onClick }: CommonImageProps): JSX_2.Element;

export declare function FileUploadInput({ label, ...props }: FileUploadInputProps): default_3.JSX.Element;

declare type FileUploadInputProps = {
    label?: string;
    handleFileChange: (event: default_3.ChangeEvent<HTMLInputElement>, helpers: FieldHelperProps<any>) => void;
} & FieldHookConfig<File | null>;

export declare enum FilterKeys {
    Search = "search",
    SearchUsers = "search-users",
    SearchPosts = "search-posts",
    MyBookmarks = "my-bookmarks",
    Explore = "explore",
    Normal = "normal",
    Lists = "lists",
    Community = "community",
    CommunityDiscussion = "community-discussion",
    Register = "register"
}

export declare interface FollowUserFormDto {
    userToFollowId: string;
}

/** Throws if used before configureAlSaqr — for clients that truly need config. */
export declare function getConfig(): AlSaqrConfig;

/** Non-throwing variant — for render paths that can degrade gracefully. */
export declare function getConfigSafe(): AlSaqrConfig | undefined;

export declare const getOAuthOptions: () => {
    redirectTo: string | undefined;
};

export declare function getSupabase(): SupabaseClient;

export declare function InfoCardContainer({ children, classNames, }: default_3.PropsWithChildren<any>): default_3.JSX.Element;

export declare const initializeClient: () => Promise<Client>;

export declare const inTestMode: () => boolean;

export declare function LoadingSpinner({ size, color }: LoadingSpinnerProps): JSX_2.Element;

declare interface LoadingSpinnerProps {
    size: string;
    color: string;
}

export declare const LoginModal: (({ onClose, routesUserCantAccess }: LoginModalProps) => JSX_2.Element) & {
    displayName: string;
};

export declare interface LoginModalProps {
    onClose: () => void;
    routesUserCantAccess?: string[];
}

export declare interface MessageFormDto {
    senderId: string;
    senderProfileImg?: string;
    senderUsername?: string;
    recipientId?: string;
    recipientProfileImg?: string;
    recipientUsername?: string;
    text: string;
    image?: string;
}

export declare interface MessageHistoryToDisplay {
    id: string;
    receiverId: string;
    receiverProfileImage: string;
    receiverUsername: string;
    messageCount: any;
    lastMessageDate: any;
}

export declare interface MessageRecord extends CommonRecordBody {
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

export declare function MessagesImagePreview({ user, index }: MessagesImagePreviewProps): default_3.JSX.Element;

declare type MessagesImagePreviewProps = {
    user: User;
    index: number;
};

export declare interface MessageToDisplay extends MessageRecord {
}

export declare const Modal: ({ isOpen, onClose, children, classNames, bodyClassNames, }: ModalProps) => default_3.JSX.Element | null;

export declare const ModalBody: ({ onClose, headerChildren, children, classNames, bodyClassNames, ...otherProps }: ModalBodyProps) => default_3.JSX.Element;

declare interface ModalBodyProps {
    onClose: () => void;
    children: default_3.ReactNode;
    headerChildren?: default_3.ReactNode;
    classNames?: string;
    bodyClassNames?: string;
    style?: CSSProperties;
}

export declare const ModalLoader: default_3.NamedExoticComponent<object>;

export declare const ModalPortal: ({ children }: default_3.PropsWithChildren<any>) => default_3.ReactPortal | null;

export declare interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: default_3.ReactNode;
    classNames?: string;
    bodyClassNames?: string;
}

export declare function MultiSelect({ label, placeholder, options, ...props }: MultiSelectProps): default_3.JSX.Element;

declare type MultiSelectProps = FieldHookConfig<string[]> & {
    label?: string;
    placeholder?: string;
    options: Option_3[];
};

export declare function MyDatePicker({ label, ...props }: MyDatePickerProps): default_3.JSX.Element;

declare type MyDatePickerProps = {
    label?: string;
    placeholder?: string;
    className?: string;
} & FieldHookConfig<Date>;

export declare function MyInput({ label, prefix, disabled, ...props }: MyInputProps): default_3.JSX.Element;

declare type MyInputProps = {
    label?: string;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    prefix?: string;
} & FieldHookConfig<string>;

export declare function NoRecordsTitle({ children }: default_3.PropsWithChildren<any>): default_3.JSX.Element;

export declare interface NotificationRecord extends CommonRecordBody {
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

export declare enum NotificationTabs {
    All = "All",
    Verified = "Verified",
    Mentions = "Mentions"
}

export declare interface NotificationToDisplay extends NotificationRecord {
}

export declare function OptimizedImage({ src, alt, onClick, classNames, loadedHeight, loadedWidth, }: CommonImageProps & {
    loadedHeight?: number;
    loadedWidth?: number;
}): JSX_2.Element;

export declare function OptimizedNewsImage({ src, alt, onClick, classNames, }: CommonImageProps): JSX_2.Element;

export declare function OptimizedPostImage({ src, alt, onClick, classNames, }: CommonImageProps): JSX_2.Element;

declare type Option_2 = {
    value: string;
    label: string;
};

declare type Option_3 = {
    value: string;
    label: string;
};

export declare function PageContainer({ appType, children, widgets, modal, onShowModal, }: PageContainerProps): JSX_2.Element;

declare type PageContainerProps = {
    appType?: AppType;
    children: ReactNode;
    widgets?: ReactNode;
    /** Wire from your app's modalStore. */
    modal?: {
        isOpen: boolean;
        content: ReactNode;
        onClose: () => void;
    };
    /** Receives "login" or a sidebar link's modalKey. */
    onShowModal?: (key: string) => void;
};

export declare function PageTitle({ children, classNames }: default_3.PropsWithChildren<any>): default_3.JSX.Element;

export declare function PageTitleNoPadding({ children, classNames, }: default_3.PropsWithChildren<any>): default_3.JSX.Element;

export declare class PaginatedResult<T> {
    data: T;
    pagination: Pagination;
    constructor(data: T, pagination: Pagination);
}

export declare interface Pagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
}

export declare class PagingParams {
    currentPage: number;
    itemsPerPage: number;
    constructor(page?: number, limit?: number);
}

export declare interface PersonalInfo {
    dateOfBirth?: string;
    maritalStatus?: "single" | "married" | "divorced" | "widowed";
}

export declare interface PersonalInterests {
    hobbies?: string[];
}

export declare function ProfileImagePreview({ username, bgThumbnail, avatar, }: ProfileImagePreviewProps): default_3.JSX.Element;

declare type ProfileImagePreviewProps = {
    avatar: string;
    username: string;
    bgThumbnail: string;
};

export declare interface ProfileUser {
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

declare interface Props {
    items: AccordionItem[];
    /** Indexes that should start expanded. Defaults to the first item. */
    defaultExpanded?: number[];
    /** When true, only one item can be open at a time. */
    allowMultiple?: boolean;
    className?: string;
}

export declare const RadioCard: ({ label, description, value, icon, testId, ...props }: RadioCardProps) => default_3.JSX.Element;

declare type RadioCardProps = {
    label: string;
    description?: string;
    value: string;
    testId?: string;
    icon?: default_3.ReactNode;
} & FieldHookConfig<string>;

export declare enum RelationshipType {
    Member = "member",
    Invited = "invited",
    Moderator = "moderator",
    Founder = "founder",
    Requested = "requested",
    InviteRequestedForCommunityDiscussion = "INVITE_REQUESTED_FOR_DISCUSSION",
    None = "none"
}

export declare class RootStore {
    authStore: AuthStore;
    constructor();
}

export declare const rootStore: RootStore;

export declare function Select({ label, placeholder, options, ...props }: SelectProps): JSX_2.Element;

declare type SelectProps = FieldHookConfig<string> & {
    label?: string;
    placeholder?: string;
    options: Option_2[];
};

export declare interface ServerError {
    statusCode: number;
    message: string;
    details: string;
}

export declare interface ServerError {
    statusCode: number;
    message: string;
    details: string;
}

export declare enum SettingsTabs {
    PersonalInfo = 0,
    PersonalizeAccount = 1,
    DeleteYourAccount = 2,
    Usage = 3
}

export declare const Sidebar: (({ appType, onShowModal, routesUserCantAccess, }: SidebarProps) => JSX_2.Element) & {
    displayName: string;
};

export declare const SIDEBAR_LINKS: Record<AppType, SidebarLink[]>;

export declare interface SidebarLink {
    title: string;
    iconSrc?: string;
    href?: string;
    externalUrlKey?: "zookUrl" | "meetupUrl";
    requiresAuth?: boolean;
    modalKey?: string;
    group?: string;
}

declare type SidebarProps = {
    appType?: AppType;
    /** Called for modal-triggering links: "login" or a link's `modalKey`.
     *  `appType` is forwarded so the app can render the right modal variant. */
    onShowModal?: (key: string, appType: AppType) => void;
    /** Routes the user can't access while logged out (e.g. ["/my-groups"]).
     *  On these, the login modal auto-opens — ported from the meetup Sidebar. */
    routesUserCantAccess?: string[];
};

export declare function SidebarRow({ title, iconSrc, Icon, IconImage, active, isShow, onClick, }: SidebarRowProps): JSX_2.Element;

declare interface SidebarRowProps {
    title: string;
    iconSrc?: string;
    Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    IconImage?: ReactElement;
    active?: boolean;
    isShow?: boolean;
    onClick?: () => void;
}

export declare enum SidebarTabs {
    Explore = 0,
    Notifications = 1,
    Messages = 2,
    Bookmarks = 3,
    Lists = 4,
    Communities = 5,
    Zook = 6,
    Meetup = 7,
    YumnaAI = 8
}

export declare const SkeletonLoader: default_3.NamedExoticComponent<SkeletonLoaderProps>;

declare interface SkeletonLoaderProps {
    count?: number;
    className?: string;
}

export declare const StoreContext: Context<RootStore>;

export declare const SuspenseLoader: default_3.NamedExoticComponent<object>;

export declare function TagOrLabel({ children, color, size, rounded, outlined, className, testId, ...props }: TagOrLabelProps): default_3.JSX.Element;

declare interface TagOrLabelProps extends default_3.ButtonHTMLAttributes<HTMLSpanElement> {
    color?: "primary" | "gold" | "secondary" | "success" | "danger" | "warning" | "info" | "neutral" | "postGradient" | "userGradient" | "communityGradient" | "commentGradient" | "communityDiscussionGradient" | "communityDiscussionMessageGradient" | "defaultSavedItemGradient";
    size?: "sm" | "md" | "lg";
    rounded?: boolean;
    outlined?: boolean;
    testId?: string;
}

declare type Theme = "dark" | "light" | "system";

export declare function ThemeProvider({ children, defaultTheme, storageKey, ...props }: ThemeProviderProps): JSX_2.Element;

declare type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
};

declare type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

export declare interface UnFollowUserFormDto {
    userToUnFollowId: string;
}

declare interface UpdateProductForm {
    title?: string;
    description?: string;
    price?: number;
    attributes?: {
        [key: string]: any;
    };
    productCategoryId?: string;
    images?: string[];
    latitude: number;
    longitude: number;
    country?: string;
    tags?: string[];
}

export declare interface UpdateUserForm {
    id: string;
    firstName: string;
    lastName: string;
    avatar: string;
    bgThumbnail: string;
    dateOfBirth?: Date;
    username: string;
    bio: string;
    religion: string;
    maritalStatus?: 'single' | 'married' | 'divorced' | 'widowed';
    hobbies?: string[];
    countryOfOrigin?: string;
}

export declare interface UpdateUserFormDto extends UpdateUserForm {
}

export declare function useCheckSession(setState: (user: User | undefined) => void, sessionUser: User | undefined | null): {};

export declare interface User extends UserInfo {
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

export declare type UserInfo = {
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

export declare interface UserIpInfo {
    locationDisplayName: string;
    latitude: number;
    longitude: number;
}

export declare interface UserItemToDisplay {
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

export declare interface UserRegisterForm extends Omit<UserInfo, "countryOfOrigin"> {
    firstName: string;
    lastName: string;
    dateOfBirth?: Date;
    maritalStatus?: "single" | "married" | "divorced" | "widowed";
    hobbies?: string[];
    religion?: string;
    countryOfOrigin?: string;
    followingUsers: UserItemToDisplay[];
}

export declare interface UserRegisterFormDto extends Omit<UserRegisterForm, "followingUsers"> {
    followingUsers: string[];
}

export declare const useStore: () => RootStore;

export declare const useTheme: () => ThemeProviderState;

export declare function Widgets({ title, classNames, children, }: PropsWithChildren<WidgetsProps>): JSX_2.Element;

declare type WidgetsProps = {
    title?: string;
    classNames?: string;
};

export { }
