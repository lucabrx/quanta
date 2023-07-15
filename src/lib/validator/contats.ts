import { z } from 'zod';

export const createContactSchema = z
	.object({
		name: z.string().max(140, 'Name must be 140 characters or less').nullish(),
		email: z.string().email('Invalid email address').nullish(),
		company: z.string().max(140, 'Company must be 140 characters or less').nullish(),
		phone: z.string().max(64, 'Phone must be 140 characters or less').nullish()
	})
	.refine(({ name, email, company, phone }) => {
		return name || email || company || phone;
	}, 'At least one field must be filled out');

export type CreateContactSchema = typeof createContactSchema;

export const deleteContactSchema = z.object({
	id: z.string()
});
export type DeleteContactSchema = typeof deleteContactSchema;
