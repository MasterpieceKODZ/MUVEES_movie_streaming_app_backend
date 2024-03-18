import prismaClient from "../../client.js";
export async function userByUsernameResolver(_: any, args: any) {
	if (!args.username) return new Error("_USERNAME_NOT_VALID");
	try {
		const user = prismaClient.user.findFirst({
			where: {
				username: args.username,
			},
		});

		return user;
	} catch (error) {
		return new Error("FAILD");
	}
}
