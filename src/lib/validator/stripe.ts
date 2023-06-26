import { z } from "zod";

export const stripeProductSchema = z.object({
    id: z.string(),
    name: z.string(),
    active: z.boolean(),
    description: z.string(),
    metadata: z.record(z.string())
  });


export const stripeCustomerSchema = z.object({
    id: z.string(),
    email: z.string().email(),
    metadata: z.record(z.string())
});