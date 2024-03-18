import prismaClient from "../../client.js";
export async function isUsernameTaken(username: string) {
	const user = await prismaClient.user.findFirst({
		where: {
			username,
		},
	});
	if (user?.id) return true;

	return false;
}
