import { z } from "zod";

export const sendRegistrationCodeSchema = z.object({
	agree: z.boolean(),
	email: z.string().email(),
	username: z
		.string()
		.min(3, { message: "Username must be at least 3 characters." })
		.max(32, { message: "Username must be at most 32 characters." })
		.regex(/^[a-zA-Z0-9_]+$/, {
			message: "Username must be alphanumeric and can contain underscores.",
		}),
});

export type SendRegistrationCode = z.infer<typeof sendRegistrationCodeSchema>;

export const verifySchema = z.object({
	confirmationCode: z.string(),
	email: z.string().email(),
	password: z
		.string()
		.min(8, { message: "Password must be at least 8 characters." })
		.max(64, { message: "Password must be at most 64 characters." }),
});

export type Verify = z.infer<typeof verifySchema>;

export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(1, { message: "Password can not be empty." }),
});

export type Login = z.infer<typeof loginSchema>;
