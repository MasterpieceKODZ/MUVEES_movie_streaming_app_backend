// import prismaClient from "../../client.js";

// export async function addNewMovieResolver(_: any, args: any) {
// 	try {
// 		const newMovie = await prismaClient.movies.create({
// 			data: {
// 				title: args.title,
// 				summary: args.summary,
// 				videoUrl: args.videoUrl,
// 				coverImageUrl: args.coverImageUrl,
// 				numberOfStreams: 0,
// 				genres: args.genres,
// 				mainCasts: args.mainCasts,
// 				releaseYear: args.releaseYear,
// 				countryOfOrigin: args.countryOfOrigin,
// 			},
// 		});

// 		if (newMovie.id) return newMovie;
// 	} catch (error) {
// 		return new Error("FAILED");
// 	}
// }
