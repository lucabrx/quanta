import { clearSupabaseData, createUser, startSupabase } from "./utils";

async function seed() {
  try {
    await startSupabase();
    await clearSupabaseData();
    await createUser({ email: "seed@example.com", full_name: "Test", password: "password" });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit();
}
seed();