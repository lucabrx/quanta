// for all product related function and logic
import { stripeProductSchema } from '$lib/validator/stripe';
import type Stripe from 'stripe';
import { supabaseAdmin } from './supabase-admin';

// if dosent exist it will insert it and if it does exist it will update it
export async function upsertProductRecord(stripeProduct: Stripe.Product) {
	const product = stripeProductSchema.parse(stripeProduct);

	const { error } = await supabaseAdmin.from('billing_products').upsert(product);

	if (error) throw error;
}
// delete product record
export async function deleteProductRecord(stripeProduct: Stripe.Product) {
	const { error } = await supabaseAdmin
		.from('billing_products')
		.delete()
		.eq('id', stripeProduct.id);

	if (error) throw error;
}
