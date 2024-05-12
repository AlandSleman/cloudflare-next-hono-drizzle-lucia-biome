import type { Session, User } from "lucia";

import type { db } from "@/services/drizzle/db";

export type ContextVariables = {
	db: typeof db;
	user: User | null;
	session: Session | null;
};
