import { createRoute, OpenAPIHono } from "@hono/zod-openapi";
import { eq } from "drizzle-orm";
import { HTTPException } from "hono/http-exception";
import { generateId } from "lucia";
import {
    generateEmailVerificationCode,
    sendVerificationCode,
} from "@/lib/utils.server";
import { sendRegistrationCodeSchema } from "@/schemas/auth";
import { updateProfileSchema } from "@/schemas/settings/profile";
import type { ContextVariables } from "@/server/types";
import { usersTable } from "@/services/drizzle/schema";

export const updateProfile = new OpenAPIHono<{
    Variables: ContextVariables;
}>().openapi(
    createRoute({
        method: "patch",
        path: "/api/settings/profile",
        tags: ["Settings"],
        summary: "Updates the user's profile",
        request: {
            body: {
                description: "Request body",
                content: {
                    "application/json": {
                        schema: updateProfileSchema.openapi("UpdateProfile", {
                            example: {
                                username: "john_doe",
                                email: "hey@example.com",
                                bio: "Hello, world!",
                                urls: [{ value: "rads" }],
                            },
                        }),
                    },
                },
                required: true,
            },
        },
        responses: {
            200: {
                description: "Success",
            },
        },
    }),
    async (c) => {
        const { bio, email, username, urls } = c.req.valid("json");
        const db = c.get("db");
        console.log("userrrname", username);
        const user = c.get("user")
        const session = c.get("session")
        console.log("user", user)
        console.log("session", session)
        //  const user = await db.query.usersTable.findFirst({
        //      where: eq(usersTable.email, email),
        //  });

        // if (!user) {
        //     throw new HTTPException(400, {
        //         message: "Username is required.",
        //     });
        // }

        // if (!username.match(/^[a-zA-Z0-9_]+$/)) {
        //     throw new HTTPException(400, {
        //         message: "Username must be alphanumeric and can contain underscores.",
        //     });
        // }


        // const existingUser = await db.query.usersTable.findFirst({
        //     where: eq(usersTable.email, email),
        // });

        // if (existingUser?.emailVerified) {
        //     return c.json({});
        // }

        // let id: string;
        // if (!existingUser) {
        //     id = generateId(15);
        //     await db
        //         .insert(usersTable)
        //         .values({
        //             id,
        //             email: email,
        //             username: username,
        //         })
        //         .returning({ insertedUserId: usersTable.id });
        // } else {
        //     id = existingUser.id;
        // }

        // const code = await generateEmailVerificationCode(id);
        // const success = await sendVerificationCode(email, code);

        // if (!success) {
        //     throw new HTTPException(500, {
        //         message: "Failed to send email.",
        //     });
        // }

        return c.json({});
    },
);
