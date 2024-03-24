import prismaClient from "../../client.js";
export async function getUserWatchListResolver(_: any, args: any) {
	if (!args.username) return new Error("INVALID_USERNAME");
	try {
		const movies = await prismaClient.users.findFirst({
			where: {
				username: args.username,
			},
			select: {
				watchList: true,
			},
		});
		return movies === null || movies === void 0 ? void 0 : movies.watchList;
	} catch (error) {
		return new Error("FAILED");
	}
}
