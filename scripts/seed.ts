import { clearSupabaseData, createContact, createUser, startSupabase, syncStripeProducts } from "./utils";

const testUsers = [
  {
    email: "seed@example.com", 
    full_name: "Test", 
    password: "password" 
  },
  {
    email: "seed2@example.com", 
  full_name: "Test2", 
  password: "password" 
  },
  {
    email: "seed3@example.com", 
  full_name: "Test3", 
  password: "password" 
  }
]
async function seed() {
  try {
    await startSupabase();
    await clearSupabaseData();
    await syncStripeProducts();
    

    for (const user of testUsers) {
     const testUser = await createUser(user);
     for (let i = 0; i < 5; i++) {
      await createContact(testUser.id);
     }
    }

    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit();
}
seed();