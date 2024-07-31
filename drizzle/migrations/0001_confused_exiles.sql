CREATE TABLE IF NOT EXISTS "hostname" (
	"domainId" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"domain" varchar(255) NOT NULL,
	"enabled" boolean DEFAULT true,
	"createdAt" timestamp DEFAULT now(),
	CONSTRAINT "hostname_domain_unique" UNIQUE("domain")
);
--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "createdAt" timestamp DEFAULT now();