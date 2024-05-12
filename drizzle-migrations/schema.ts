import { pgTable, uniqueIndex, pgEnum, varchar, boolean, foreignKey, serial, timestamp, text } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"

export const aal_level = pgEnum("aal_level", ['aal1', 'aal2', 'aal3'])
export const code_challenge_method = pgEnum("code_challenge_method", ['s256', 'plain'])
export const factor_status = pgEnum("factor_status", ['unverified', 'verified'])
export const factor_type = pgEnum("factor_type", ['totp', 'webauthn'])
export const one_time_token_type = pgEnum("one_time_token_type", ['confirmation_token', 'reauthentication_token', 'recovery_token', 'email_change_token_new', 'email_change_token_current', 'phone_change_token'])
export const key_status = pgEnum("key_status", ['default', 'valid', 'invalid', 'expired'])
export const key_type = pgEnum("key_type", ['aead-ietf', 'aead-det', 'hmacsha512', 'hmacsha256', 'auth', 'shorthash', 'generichash', 'kdf', 'secretbox', 'secretstream', 'stream_xchacha20'])
export const action = pgEnum("action", ['INSERT', 'UPDATE', 'DELETE', 'TRUNCATE', 'ERROR'])
export const equality_op = pgEnum("equality_op", ['eq', 'neq', 'lt', 'lte', 'gt', 'gte', 'in'])


export const users = pgTable("users", {
	id: varchar("id", { length: 255 }).primaryKey().notNull(),
	email: varchar("email", { length: 255 }).notNull(),
	normalized_email: varchar("normalized_email", { length: 255 }).notNull(),
	email_verified: boolean("email_verified").default(false),
	agreed_to_terms: boolean("agreed_to_terms").default(false),
	hashed_password: varchar("hashed_password").default('').notNull(),
	username: varchar("username", { length: 255 }).notNull(),
},
(table) => {
	return {
		normalized_email_idx: uniqueIndex("normalized_email_idx").on(table.normalized_email),
	}
});

export const email_verification_codes = pgTable("email_verification_codes", {
	id: serial("id").primaryKey().notNull(),
	code: varchar("code", { length: 8 }).notNull(),
	expires_at: timestamp("expires_at", { withTimezone: true, mode: 'string' }).notNull(),
	user_id: varchar("user_id").notNull().references(() => users.id),
});

export const sessions = pgTable("sessions", {
	id: text("id").primaryKey().notNull(),
	expires_at: timestamp("expires_at", { withTimezone: true, mode: 'string' }).notNull(),
	user_id: varchar("user_id").notNull().references(() => users.id),
});