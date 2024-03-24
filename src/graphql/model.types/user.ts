import { Movie } from "./movie.js";

export type User = {
	id: number;
	username: string;
	role: string;
	watchList: Movie[];
	watchHistory: Movie[];
};
