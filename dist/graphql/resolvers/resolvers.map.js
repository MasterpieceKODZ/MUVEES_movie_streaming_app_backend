import { addMovieToWatchListResolver } from "./add.movie.to.watch.list.js";
import { isMovieOnUserWatchListResolver } from "./is.movie.on.user.watchlist.js";
// import { addNewMovieResolver } from "./add.new.movie.js";
import { getMoviesByCountryResolver } from "./movie.by.country.js";
import { getMovieByIdResolver } from "./movie.by.id.js";
import { movieResolver } from "./movie.js";
import { getMoviesByGenreResolver } from "./movies.by.genre.js";
import { getMoviesByTitleResolver } from "./movies.by.title.js";
import { removeMovieFromWatchListResolver } from "./remove.movie.from.watchlist.js";
import { updateUserWatchHistoryResolver } from "./update.watch.history.js";
import { getUserByUsernameResolver } from "./user.by.username.js";
import { userResolver } from "./user.js";
import { getUserWatchHistoryResolver } from "./user.watch.history.js";
import { getUserWatchListResolver } from "./user.watch.list.js";
export const resolversMap = {
    Query: {
        getMoviesByGenre: getMoviesByGenreResolver,
        getMoviesByCountry: getMoviesByCountryResolver,
        getMoviesByTitle: getMoviesByTitleResolver,
        getMovieById: getMovieByIdResolver,
        getUserByUsername: getUserByUsernameResolver,
        getUserWatchHistory: getUserWatchHistoryResolver,
        getUserWatchList: getUserWatchListResolver,
        isMovieOnUserWatchList: isMovieOnUserWatchListResolver,
    },
    Mutation: {
        addMovieToWatchList: addMovieToWatchListResolver,
        removeMovieFromWatchList: removeMovieFromWatchListResolver,
        updateUserWatchHistory: updateUserWatchHistoryResolver,
        // addNewMovie: addNewMovieResolver,
    },
    User: userResolver,
    Movie: movieResolver,
};
