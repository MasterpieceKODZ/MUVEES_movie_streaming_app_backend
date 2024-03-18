import prismaClient from "../../client.js";
export async function moviesByTitleResolver(_: any, args: any) {
	if (!args.title) return new Error("TITLE_NOT_FOUND");
	try {
		const movies = await prismaClient.movie.findMany({
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
