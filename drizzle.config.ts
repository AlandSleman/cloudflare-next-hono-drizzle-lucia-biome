import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/services/drizzle/schema.ts",
  out: "./drizzle-migrations",
  dbCredentials: { url: process.env.DATABASE_URL! },
});

