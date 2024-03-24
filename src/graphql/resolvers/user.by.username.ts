import prismaClient from "../../client.js";
export async function getUserByUsernameResolver(_: any, args: any) {
	if (!args.username) return new Error("_USERNAME_NOT_VALID");
	try {
		const user = prismaClient.users.findFirst({
			where: {
				username: args.username,
			},
			select: {
				id: true,
				username: true,
				role: true,
				watchList: true,
				watchHistory: true,
			},
		});

		return user;
	} catch (error) {
		return new Error("FAILED");
	}
}
