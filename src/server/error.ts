export class ApiError extends Error {
	constructor(
		message: string,
		public data: unknown = {},
		public status = 500,
	) {
		super(message);
		this.name = "ApiError";
	}
}
