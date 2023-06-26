import { z } from "zod";

export const stripeProductSchema = z.object({
    id: z.string(),
    name: z.string(),
    active: z.boolean(),
    description: z.string(),
    metadata: z.record(z.string()),
  });