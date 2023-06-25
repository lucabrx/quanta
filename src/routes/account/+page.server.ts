import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { superValidate } from "sveltekit-superforms/server";
import { emailSchema, passwordSchema, profileSchema } from "$lib/schemas";


export const load: PageServerLoad = async (event) => {
    const session = await event.locals.getSession();
    if(!session) throw redirect(302, "/login")


    // no need to check for user by id because our db policy will handle that
    async function getUserProfile() {
        const {error: profileError, data:profile} = await event.locals.supabase
        .from("profiles")
        .select("*")
        .limit(1)
        .single();

        if(profileError) throw error(500, "Erorr fetching profile");


        return profile;
    }

    return {
        profileForm: superValidate(await getUserProfile(), profileSchema, {
          id: "profile",
        }),
        emailForm: superValidate({ email: session.user.email }, emailSchema, {
          id: "email",
        }),
        passwordForm: superValidate(passwordSchema, {
          id: "password",
        }),
      };
   
}