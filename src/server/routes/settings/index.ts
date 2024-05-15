import { OpenAPIHono } from "@hono/zod-openapi";
import type { ContextVariables } from "@/server/types";
import { updateProfile } from "./profile";

export const settingsApp = new OpenAPIHono<{ Variables: ContextVariables }>()
	.route("/", updateProfile);

