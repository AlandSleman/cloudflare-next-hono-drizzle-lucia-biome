import { relations } from "drizzle-orm";
import {
	boolean,
	pgTable,
	serial,
	text,
	timestamp,
	uniqueIndex,
	varchar,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable(
	"users",
	{
		id: varchar("id", {
			length: 255,
		}).primaryKey(),
		email: varchar("email", {
			length: 255,
		}).notNull(),
		username: varchar("username", {
			length: 255,
		}).notNull(),
		emailVerified: boolean("email_verified").default(false),
		hashedPassword: varchar("hashed_password").default("").notNull(),
		createdAt: timestamp("created_at", {
			withTimezone: true,
			mode: "date",
		}).notNull().defaultNow(),
	},
	(table) => {
		return {
			emailIdx: uniqueIndex("email_idx").on(
				table.email,
			),
		};
	},
);

export const emailVerificationCodesTable = pgTable("email_verification_codes", {
	id: serial("id").primaryKey(),
	code: varchar("code", {
		length: 8,
	}).notNull(),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date",
	}).notNull(),

	userId: varchar("user_id")
		.notNull()
		.references(() => usersTable.id),

	createdAt: timestamp("created_at", {
		withTimezone: true,
		mode: "date",
	}).notNull().defaultNow(),
});

export const sessionsTable = pgTable("sessions", {
	id: text("id").primaryKey(),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date",
	}).notNull(),

	userId: varchar("user_id")
		.notNull()
		.references(() => usersTable.id),
	createdAt: timestamp("created_at", {
		withTimezone: true,
		mode: "date",
	}).notNull().defaultNow(),
});

export const usersRelations = relations(usersTable, ({ many, one }) => ({
	emailVerificationCodes: many(emailVerificationCodesTable),
	sessions: many(sessionsTable),
}));

export const emailVerificationCodesRelations = relations(
	emailVerificationCodesTable,
	({ one }) => ({
		users: one(usersTable, {
			fields: [emailVerificationCodesTable.userId],
			references: [usersTable.id],
		}),
	}),
);

export const sessionsRelations = relations(sessionsTable, ({ one }) => ({
	users: one(usersTable, {
		fields: [sessionsTable.userId],
		references: [usersTable.id],
	}),
}));
