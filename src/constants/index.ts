// Common constants shared across all AlSaqr projects.
// Auth-related subset ported from the reference repo's src/utils/constants.
import type { UserRegisterForm } from "../typings";
import { getConfigSafe } from "../config";

export const DEFAULT_USER_REGISTRATION_FORM: UserRegisterForm = {
  username: "",
  avatar: "",
  bgThumbnail: "",
  email: "",
  bio: "",
  firstName: "",
  lastName: "",
  dateOfBirth: undefined,
  maritalStatus: undefined,
  hobbies: [],
  religion: "",
  countryOfOrigin: undefined,
  followingUsers: [],
};

// Vite env vars are always strings, so compare against the "true" literal
// (the reference repo's `== true` never matched a string and was a latent bug).
export const inTestMode = () => getConfigSafe()?.testMode ?? false;

export const getOAuthOptions = () => ({
  redirectTo: getConfigSafe()?.baseUrl,
});

// Image fallbacks (used by src/components/Image).
export const FALLBACK_IMAGE_URL =
  "https://res.cloudinary.com/aa1997/image/upload/v1720130142/Web3-Client-Projects/Gm.png";
export const FALLBACK_NEWS_IMAGE_URL = "/explore-news-placeholder.svg";
export const FALLBACK_POST_IMAGE_URL = "/post-placeholder.svg";

// --- Sidebar / layout (spec 0005) -------------------------------------------
// Which tenant app is consuming the CDN; drives the sidebar link set.
export type AppType = "default" | "meetup" | "zook";

export interface SidebarLink {
  title: string;
  iconSrc?: string; // e.g. "/icons/explore.svg"
  href?: string; // internal route (react-router)
  externalUrlKey?: "zookUrl" | "meetupUrl"; // resolved from runtime config
  requiresAuth?: boolean; // trigger login modal when logged out
  modalKey?: string; // open a modal by key (e.g. "location")
  group?: string; // render under a collapsible-style group header
}

// User-related links (profile block) are intentionally excluded per app type.
export const SIDEBAR_LINKS: Record<AppType, SidebarLink[]> = {
  default: [
    { title: "Explore", iconSrc: "/icons/explore.svg", href: "/explore" },
    { title: "Notifications", iconSrc: "/icons/notifications.svg", href: "/notifications", requiresAuth: true },
    { title: "Messages", iconSrc: "/icons/messages.svg", href: "/messages", requiresAuth: true },
    { title: "Bookmarks", iconSrc: "/icons/bookmarks.svg", href: "/bookmarks", requiresAuth: true },
    { title: "Lists", iconSrc: "/icons/lists.svg", href: "/lists", requiresAuth: true },
    { title: "Communities", iconSrc: "/icons/community.svg", href: "/communities", requiresAuth: true },
    { title: "Marketplace", iconSrc: "/icons/zook.svg", externalUrlKey: "zookUrl" },
    { title: "Meetups", iconSrc: "/icons/meetup.svg", externalUrlKey: "meetupUrl" },
  ],
  meetup: [
    { title: "Notifications", iconSrc: "/icons/notification.svg", href: "/notifications" },
    { title: "Inbox", iconSrc: "/icons/inbox.svg", href: "/messages" },
    { title: "My Groups", iconSrc: "/icons/my-groups.svg", href: "/my-groups" },
    { title: "My Events", iconSrc: "/icons/my-events.svg", href: "/my-events" },
    { title: "Location", iconSrc: "/icons/location.svg", modalKey: "location", group: "Location" },
    { title: "Groups", iconSrc: "/icons/groups.svg", href: "/groups" },
    { title: "Events", iconSrc: "/icons/events.svg", href: "/events" },
    { title: "Online Events", iconSrc: "/icons/online-events.svg", href: "/online-events" },
    { title: "Local Guides", iconSrc: "/icons/local-guides.svg", href: "/local-guides" },
  ],
  zook: [
    { title: "Notifications", iconSrc: "/icons/notification.svg", href: "/notifications" },
    { title: "Inbox", iconSrc: "/icons/inbox.svg", href: "/messages" },
    { title: "Buying", iconSrc: "/icons/buying.svg", href: "/buying" },
    { title: "Selling", iconSrc: "/icons/selling.svg", href: "/selling" },
    { title: "Location", iconSrc: "/icons/location.svg", modalKey: "location", group: "Location" },
    { title: "Vehicles", iconSrc: "/icons/vehicles.svg", href: "/vehicles", group: "Categories" },
    { title: "Rentals", iconSrc: "/icons/rentals.svg", href: "/rentals", group: "Categories" },
    { title: "Clothing", iconSrc: "/icons/clothing.svg", href: "/clothing", group: "Categories" },
    { title: "Electronics", iconSrc: "/icons/electronics.svg", href: "/electronics", group: "Categories" },
    { title: "Office Supplies", iconSrc: "/icons/officesupplies.svg", href: "/office-supplies", group: "Categories" },
    { title: "Pet Supplies", iconSrc: "/icons/petsupplies.svg", href: "/pet-supplies", group: "Categories" },
    { title: "Sporting Goods", iconSrc: "/icons/sportinggoods.svg", href: "/sporting-goods", group: "Categories" },
    { title: "Toys and Games", iconSrc: "/icons/toysandgames.svg", href: "/toys-and-games", group: "Categories" },
  ],
};
