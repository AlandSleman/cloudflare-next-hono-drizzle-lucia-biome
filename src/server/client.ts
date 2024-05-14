import { hc } from "hono/client";
import { $fetch } from "ofetch";
const client0 = hc<AppXType>('http://localhost:8787/')
client0.index.$get
import type { AppType, AppXType } from "@/server";
import { getBaseUrl } from "@/server/utils";

export const client = hc<AppType>(getBaseUrl(), {
	fetch(input, requestInit, _, __) {
		return $fetch(input instanceof URL ? input.toString() : input, requestInit);
	},
});
