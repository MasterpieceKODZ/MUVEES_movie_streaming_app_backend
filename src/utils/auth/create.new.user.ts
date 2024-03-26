import prismaClient from "../../client.js";
import crypto, { pbkdf2Sync } from "crypto";
export async function createNewUser(username: string, password: string) {
	const passwordHashAndSalt = await hashPassword(password);
	const createdUser = await prismaClient.users.create({
		data: {
			username,
			passwordHash: passwordHashAndSalt.hashedPassword,
			salt: passwordHashAndSalt.salt,
			role: "user",
		},
	});
	if (!createdUser.id) throw new Error("CREATE_USER_FAILED");
	return createdUser;
}
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
export async function generatePasswordSalt() {
	const salt = crypto
		.randomBytes(256)
		.toString("base64")
		.replace(/\+/g, "x")
		.replace(/\s/g, "v");
	return salt;
}
