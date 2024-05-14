/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/api/auth/register/send-registration-code": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Emails the user a temporary registration code */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            /** @description Request body */
            requestBody: {
                content: {
                    "application/json": components["schemas"]["SendRegistrationCode"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/register/verify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Verifies the confirmation code and stores the password hash. */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            /** @description Request body */
            requestBody: {
                content: {
                    "application/json": components["schemas"]["Verify"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Authorize user */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            /** @description Request body */
            requestBody: {
                content: {
                    "application/json": components["schemas"]["Login"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/logout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Logout */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/secret": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Shhh... */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["SecretResponse"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** @example {
         *       "username": "john_doe",
         *       "email": "hey@example.com",
         *       "agree": true
         *     } */
        SendRegistrationCode: {
            agree: boolean;
            /** Format: email */
            email: string;
            username: string;
        };
        /** @example {
         *       "email": "hey@example.com",
         *       "confirmationCode": "42424242",
         *       "password": "11eeb60bbef14eb5b8990c02cdb11851"
         *     } */
        Verify: {
            confirmationCode: string;
            /** Format: email */
            email: string;
            password: string;
        };
        Login: {
            /** Format: email */
            email: string;
            password: string;
        };
        SecretResponse: {
            message: string;
            /** Format: email */
            email: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
