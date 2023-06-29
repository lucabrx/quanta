import { productNames } from "$lib/config";
import { z } from "zod";

export const subscriptionTierSchema = z.enum(productNames);
export type SubscriptionTier = z.infer<typeof subscriptionTierSchema>;

export const subscriptionProductSchema = z.object({
  product: z.object({
    name: subscriptionTierSchema,
  }),
});