import createClient from "openapi-fetch";
import type { paths } from "./schema"; // generated by openapi-typescript
import { clientEnvs } from "@/env/client";

export const openApiClient = createClient<paths>({ baseUrl: `http://${clientEnvs.NEXT_PUBLIC_DOMAIN}/api` });

