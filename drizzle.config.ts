import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.tsx',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
// This configuration file is used to define the schema and output directory for Drizzle ORM migrations.
// It specifies the output directory for the generated migrations and the schema file that contains the database schema