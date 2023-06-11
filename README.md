## Suppabase locally via docker

### start project locally
```bash
pnpm install supabase -D
pnpx supabase init <init project>
pnpx supabase start <start project>
pnpx supabase status -o env <get env in console>
````
- in supabase/config.toml update site_url and additiona_redirect_urls to the local one
```bash

