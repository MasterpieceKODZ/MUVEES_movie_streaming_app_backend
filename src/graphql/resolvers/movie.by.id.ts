import prismaClient from "../../client.js";
export async function movieByIdResolver(_: any, args: any) {
	if (!args.id) return new Error("INVALID_RECORD_ID");
	try {
		const movie = await prismaClient.movie.findFirst({
			where: {
				id: args.id,
			},
		});
		return movie;
	} catch (error) {
		return new Error("FAILED");
	}
}
