# Astro Angular Environment Test



### Repo 

Install dependencies
```text
npm install 
```

--- 

Create a .env file with: 
```text
SECRET='SECRET'
SECRET_SECRET='SECRET_SECRET'
PUBLIC_SECRET='PUBLIC_SECRET'
```
--- 

Update src/env.d.ts
```typescript
/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly SECRET: string;
  readonly SECRET_SECRET: string;
  readonly PUBLIC_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```
---
Start Server
```text
npm start
```

---
Test route: 
 
```dotnetcli
https://localhost:3000/secret
```

---
Switch config in **astro.config.mjs** to show the different in the console


```javascript
export default defineConfig({
  integrations: [
//    analogjsangular() //uncomment it
  ]
});
```