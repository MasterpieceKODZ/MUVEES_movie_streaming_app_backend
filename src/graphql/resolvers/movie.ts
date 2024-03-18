import prismaClient from "../../client.js";
import { Movie } from "../model.types/movie.js";
export const movieResolver = {
	id(parent: Movie) {
		return parent.id;
	},
	title(parent: Movie) {
		return parent.title;
	},
	summary(parent: Movie) {
		return parent.summary;
	},
	videoUrl(parent: Movie) {
		return parent.videoUrl;
	},
	coverImageUrl(parent: Movie) {
		return parent.coverImageUrl;
	},
	numberOfStreams(parent: Movie) {
		return parent.numberOfStreams;
	},
	genres(parent: Movie) {
		return parent.genres;
	},
	mainCasts(parent: Movie) {
		return parent.mainCasts;
	},
	releaseYear(parent: Movie) {
		return parent.releaseYear;
	},
	countryOfOrigin(parent: Movie) {
		return parent.countryOfOrigin;
	},
	async savedBy(parent: Movie) {
		try {
			const watchHist = await prismaClient.movie.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					savedBy: true,
				},
			});
			return watchHist === null || watchHist === void 0
				? void 0
				: watchHist.savedBy;
		} catch (err) {
			console.log("project people resolution failed...");
			console.error(err);
			return null;
		}
	},
	async watchedBy(parent: Movie) {
		try {
			const watchHist = await prismaClient.movie.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					watchedBy: true,
				},
			});
			return watchHist === null || watchHist === void 0
				? void 0
				: watchHist.watchedBy;
		} catch (err) {
			console.log("project people resolution failed...");
			console.error(err);
			return null;
		}
	},
};
