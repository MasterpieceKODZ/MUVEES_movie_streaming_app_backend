import prismaClient from "../../client.js";
export async function removeMovieFromWatchListResolver(_: any, args: any) {
	if (!args.username) return new Error("INVALID_USERNAME");
	if (!args.movieId) return new Error("INVALID_RECORD_ID");
	try {
		const list = await prismaClient.users.update({
			where: {
				username: args.username,
			},
			data: {
				watchList: {
					disconnect: [{ id: args.movieId }],
				},
			},
			select: {
				watchList: true,
			},
		});

		return list.watchList;
	} catch (error) {
		console.log(error);

		return new Error("FAILED");
	}
}
