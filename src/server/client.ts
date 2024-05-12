import { hc } from "hono/client";
import { $fetch } from "ofetch";

import type { AppType } from "@/server";
import { getBaseUrl } from "@/server/utils";

export const client = hc<AppType>(getBaseUrl(), {
	fetch(input, requestInit, _, __) {
		return $fetch(input instanceof URL ? input.toString() : input, requestInit);
	},
});
