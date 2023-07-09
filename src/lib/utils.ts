import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 import { tierPolicy } from "./config";
import type { SubscriptionTier } from "./validator/tier";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function hasReachedMaxContacts(tier: SubscriptionTier, contactsCount: number) {
  return contactsCount >= tierPolicy["maxContacts"][tier];
}

export function getUpgradeURL(tier: SubscriptionTier) {
  return tier === "Free" ? "/pricing" : "/account/billing";
}