import { addMovieToWatchListResolver } from "./add.movie.to.watch.list.js";
import { moviesByCountryResolver } from "./movie.by.country.js";
import { movieByIdResolver } from "./movie.by.id.js";
import { movieResolver } from "./movie.js";
import { moviesByGenreResolver } from "./movies.by.genre.js";
import { moviesByTitleResolver } from "./movies.by.title.js";
import { removeMovieFromWatchListResolver } from "./remove.movie.from.watchlist.js";
import { updateUserWatchHistoryResolver } from "./update.watch.history.js";
import { userByUsernameResolver } from "./user.by.username.js";
import { userResolver } from "./user.js";
import { userWatchHistoryResolver } from "./user.watch.history.js";
import { userWatchListResolver } from "./user.watch.list.js";

export const resolversMap = {
	Query: {
		moviesByGenre: moviesByGenreResolver,
		moviesByCountry: moviesByCountryResolver,
		moviesByTitle: moviesByTitleResolver,
		movieById: movieByIdResolver,
		getUserByUsername: userByUsernameResolver,
		userWatchHistory: userWatchHistoryResolver,
		userWatchList: userWatchListResolver,
	},

	Mutation: {
		addMovieToWatchList: addMovieToWatchListResolver,
		removeMovieFromWatchList: removeMovieFromWatchListResolver,
		updateUserWatchHistory: updateUserWatchHistoryResolver,
	},

	User: userResolver,

	Movie: movieResolver,
};
