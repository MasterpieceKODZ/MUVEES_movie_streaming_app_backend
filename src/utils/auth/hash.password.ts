import { pbkdf2Sync } from "crypto";
import { generatePasswordSalt } from "./generate.hash.salt.js";
export async function hashPassword(password: string) {
	const salt = await generatePasswordSalt();
	const hashedPassword = pbkdf2Sync(
		password,
		salt,
		10000,
		1028,
		"sha512",
	).toString("hex");
	return { hashedPassword, salt };
}
