import { stripeCustomerSchema } from "$lib/validator/stripe";
import type Stripe from "stripe";
import { supabaseAdmin } from "./supabase-admin";
import { stripe } from "./stripe";

// update customer record
export async function updateCustomerRecord(stripeCustomer: Stripe.Customer) {
const customer = stripeCustomerSchema.parse(stripeCustomer);
  
const { error } = await supabaseAdmin.from("billing_customers").update(customer).eq("id", customer.id);
  
if (error) throw error;
}
// delete customer record
export async function deleteCustomerRecord(stripeCustomer: Stripe.Customer) {
const { error } = await supabaseAdmin.from("billing_customers").delete().eq("id", stripeCustomer.id);
  
if (error) throw error;
}

// get customer record
export async function getCustomerRecord(user_id: string) {
const { data: existingCustomer } = await supabaseAdmin
.from("billing_customers")
.select("*")
.eq("user_id", user_id)
.limit(1)
.single();
  
if (existingCustomer) return existingCustomer;

const {data: userData, error: userError} = await supabaseAdmin.auth.admin.getUserById(user_id);

if(userError || !(userData && userData.user.email)) throw new Error("User not found");

const stripeCustomer = await stripe.customers.create({
    email: userData.user.email,
    metadata: {
        user_id: user_id
    }
});

if (!stripeCustomer) throw new Error("Stripe customer creation failed");

const { error: newCustomerError, data: newCustomer } = await supabaseAdmin
.from("billing_customers")
.insert({
    id: stripeCustomer.id,
    user_id: userData.user.id,
    email: userData.user.email,
})
.select("*")
.single();

if (newCustomerError) throw newCustomerError;

return newCustomer;
}