import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { Lucia } from "lucia";

import { serverEnvs } from "@/env/server";
import { db } from "@/services/drizzle/db";
import {
	sessionsTable ,
	usersTable ,
} from "@/services/drizzle/schema";

const adapter = new DrizzlePostgreSQLAdapter(db, sessionsTable, usersTable);

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: serverEnvs.NODE_ENV === "production",
		},
	},
	getUserAttributes: (attributes) => {
		return {
			id: attributes.id,
			email: attributes.email,
			username:attributes.username
		};
	},
});

declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: {
			id: number;
			email: string;
			username: string;
		};
	}
}
