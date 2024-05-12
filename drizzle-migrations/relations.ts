import { relations } from "drizzle-orm/relations";
import { users, email_verification_codes, sessions } from "./schema";

export const email_verification_codesRelations = relations(email_verification_codes, ({one}) => ({
	user: one(users, {
		fields: [email_verification_codes.user_id],
		references: [users.id]
	}),
}));

export const usersRelations = relations(users, ({many}) => ({
	email_verification_codes: many(email_verification_codes),
	sessions: many(sessions),
}));

export const sessionsRelations = relations(sessions, ({one}) => ({
	user: one(users, {
		fields: [sessions.user_id],
		references: [users.id]
	}),
}));