import prismaClient from "../../client.js";
export async function getMoviesByGenreResolver(_: any, args: any) {
	if (!args.genre) return new Error("NO_GENRE_PROVIDED");
	try {
		const movies = await prismaClient.movies.findMany({
			where: {
				genres: {
					has: args.genre,
				},
			},
		});
		return movies;
	} catch (error) {
		return new Error("FAILED");
	}
}
