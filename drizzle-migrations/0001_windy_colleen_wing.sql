DROP INDEX IF EXISTS "normalized_email_idx";--> statement-breakpoint
ALTER TABLE "email_verification_codes" ADD COLUMN "created_at" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "sessions" ADD COLUMN "created_at" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "created_at" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "email_idx" ON "users" ("email");--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "normalized_email";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "agreed_to_terms";