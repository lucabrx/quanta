import {z} from "zod";

export const stripeSubscriptionStatusEnum = z.enum([
    "trialing",
    "active",
    "canceled",
    "incomplete",
    "incomplete_expired",
    "past_due",
    "unpaid",
    "paused",
  ]);
  
  // check stripe docs for the full object structure
  const stripeSubscriptionItemsSchema = z.object({
    data: z.array(
      z.object({
        price: z.object({
          product: z.string(),
        }),
      })
    ),
  });
  
  const unixTimestampToISOString = z.number().transform((n) => new Date(n * 1000).toISOString());
  
  export const stripeSubscriptionSchema = z
    .object({
      id: z.string(),
      status: stripeSubscriptionStatusEnum,
      customer: z.string(),
      items: stripeSubscriptionItemsSchema,
      cancel_at_period_end: z.boolean(),
      created: unixTimestampToISOString,
      current_period_start: unixTimestampToISOString,
      current_period_end: unixTimestampToISOString,
      trial_start: unixTimestampToISOString.nullable(),
      trial_end: unixTimestampToISOString.nullable(),
      metadata: z.record(z.string()),
    })
    .transform((obj) => {
      const { items, customer, ...rest } = obj;
      const [{ price }] = items.data;
      return {
        ...rest,
        customer_id: customer,
        product_id: price.product,
      };
    });