CREATE TABLE IF NOT EXISTS "roles" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_roles" (
	"user_id" serial NOT NULL,
	"role_id" serial NOT NULL,
	CONSTRAINT "user_roles_user_id_role_id_pk" PRIMARY KEY("user_id","role_id")
);
--> statement-breakpoint
ALTER TABLE "messages" ADD COLUMN "is_system_message" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "messages" ADD COLUMN "system_messages" json;