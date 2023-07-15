import { lookupKeys, productConfig, productNames } from '$lib/config';
import { z } from 'zod';

const priceProductSchema = z
	.object({
		id: z.string(),
		name: z.enum([...productNames]),
		description: z.string()
	})
	.transform((product) => {
		return {
			...product,
			features: productConfig[product.name].features,
			call_to_action: productConfig[product.name].call_to_action
		};
	});

const priceSchema = z.object({
	id: z.string(),
	lookup_key: z.enum([...lookupKeys]),
	unit_amount: z.number().transform((amount) => amount / 100),
	product: priceProductSchema
});

export const priceListSchema = z.array(priceSchema);
