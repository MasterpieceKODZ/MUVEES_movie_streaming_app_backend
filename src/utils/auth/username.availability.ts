import prismaClient from "../../client.js";

export async function isUsernameTaken(username: string) {
	const userName = await prismaClient.user.findFirst({
		where: {
			username,
		},
	});

	if (userName?.username === username) return true;

	false;
}
