import prismaClient from "../../client.js";
export async function userWatchListResolver(_: any, args: any) {
	if (!args.username) return new Error("INVALID_USERNAME");
	try {
		const movies = await prismaClient.user.findFirst({
			where: {
				username: args.username,
			},
			select: {
				watchList: true,
			},
		});
		return movies === null || movies === void 0 ? void 0 : movies.watchList;
	} catch (error) {
		return new Error("FAILD");
	}
}
