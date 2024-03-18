import prismaClient from "../../client.js";
export async function updateUserWatchHistoryResolver(_: any, args: any) {
	if (!args.username) return new Error("INVALID_USERNAME");
	if (!args.movieId) return new Error("INVALID_RECORD_ID");
	try {
		const list = await prismaClient.user.update({
			where: {
				username: args.username,
			},
			data: {
				watchHistory: {
					connect: [{ id: args.movieId }],
				},
			},
			select: {
				watchHistory: true,
			},
		});
		return list.watchHistory;
	} catch (error) {
		return new Error("FAILED");
	}
}
