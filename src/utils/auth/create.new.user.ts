import prismaClient from "../../client.js";

export async function createNewUser(
	username: string,
	passwordHash: string,
	salt: string,
) {
	const createdUser = await prismaClient.user.create({
		data: {
			username,
			passwordHash,
			salt,
			role: "user",
		},
	});

	if (createdUser.id) {
		return createdUser;
	} else {
		throw new Error("CREATE_USER_FAILED");
	}
}
