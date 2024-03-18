import prismaClient from "../../client.js";
export async function moviesByCountryResolver(_: any, args: any) {
	if (!args.country) return new Error("COUNTRY_NOT_FOUND");
	try {
		const movie = prismaClient.movie.findMany({
			where: {
				countryOfOrigin: args.country,
			},
		});

		return movie;
	} catch (error) {
		return new Error("FAILD");
	}
}
