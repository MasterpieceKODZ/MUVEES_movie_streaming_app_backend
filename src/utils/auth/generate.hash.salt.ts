import crypto from "crypto";

export async function generatePasswordSalt(): Promise<string> {
	const salt = crypto
		.randomBytes(256)
		.toString("base64")
		.replace(/\+/g, "x")
		.replace(/\s/g, "v");

	return salt;
}
