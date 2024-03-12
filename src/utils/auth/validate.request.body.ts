import prismaClient from "../../client.js";

export async function validateRequestBody(
	username: string,
	password: string,
): Promise<boolean> {
	if (!username || !password) return false;

	// return an false if username contains invalid characters
	if (/[^a-zA-Z0-9_@$+]/gi.test(username)) return false;

	return true;
}

export async function isUsernameTaken(username: string) {
	const userName = await prismaClient.user.findFirst({
		where: {
			username,
		},
	});

	if (userName?.username === username) return true;

	false;
}
