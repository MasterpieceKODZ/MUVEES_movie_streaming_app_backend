import prismaClient from "../../client.js";
export async function moviesByGenreResolver(_: any, args: any) {
	if (!args.genre) return new Error("NO_GENRE_PROVIDED");
	try {
		const movies = await prismaClient.movie.findMany({
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
