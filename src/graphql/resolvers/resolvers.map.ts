import { moviesByGenreResolver } from "./moviesByGenreResolver.js";

export const resolversMap = {
	Query: {
		moviesByGenre: moviesByGenreResolver,
	},
};
