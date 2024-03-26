import prismaClient from "../../client.js";
export async function getMoviesByTitleResolver(_: any, args: any) {
	if (!args.title) return new Error("TITLE_NOT_FOUND");
	try {
		const movies = await prismaClient.movies.findMany({
			where: {
				title: {
					contains: args.title,
				},
			},
		});
		return movies;
	} catch (error) {
		return new Error("FAILED");
	}
}
