CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"clerkId" varchar(255),
	"fullName" varchar(150),
	"email" varchar(100),
	CONSTRAINT "user_clerkId_unique" UNIQUE("clerkId"),
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
