import { Movie } from "./movie.js";

export type User = {
	id: number;
	username: string;
	passwordHash: String;
	salt: string;
	role: string;
	watchList: Movie[];
	watchHistory: Movie[];
};
