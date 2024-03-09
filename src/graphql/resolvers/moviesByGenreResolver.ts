export async function moviesByGenreResolver(_: any, args: any) {
	console.log("movies by genre loaded...");
	return [
		{
			id: 1,
			title: "Brotherhood",
			summary: "a nice movie",
			videoUrl: "s3.vid.com",
			coverImageUrl: "s3.cover.img.com",
			numberOfStreams: 23,
			genres: ["action", "drama", "crime"],
			mainCasts: ["falz"],
			releaseYear: "2022",
			countryOfOrigin: "nollyhood",
			watchedBy: [],
		},
	];
}
