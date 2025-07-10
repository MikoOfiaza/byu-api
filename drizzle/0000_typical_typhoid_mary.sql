CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"clerk_id" text NOT NULL,
	"email" varchar(256),
	"name" text,
	"username" text,
	CONSTRAINT "users_clerk_id_unique" UNIQUE("clerk_id")
);
