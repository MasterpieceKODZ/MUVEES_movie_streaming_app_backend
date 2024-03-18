import prismaClient from "../../client.js";
import { User } from "../model.types/user.js";
export const userResolver = {
	id(parent: User) {
		return parent.id;
	},
	username(parent: User) {
		return parent.username;
	},
	passwordHash(parent: User) {
		return parent.passwordHash;
	},
	salt(parent: User) {
		return parent.salt;
	},
	role(parent: User) {
		return parent.role;
	},
	async watchList(parent: User) {
		try {
			const watchHist = await prismaClient.user.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					watchList: true,
				},
			});
			return watchHist === null || watchHist === void 0
				? void 0
				: watchHist.watchList;
		} catch (err) {
			console.log("project people resolution failed...");
			console.error(err);
			return null;
		}
	},
	async watchHistory(parent: User) {
		try {
			const watchHist = await prismaClient.user.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					watchHistory: true,
				},
			});
			return watchHist === null || watchHist === void 0
				? void 0
				: watchHist.watchHistory;
		} catch (err) {
			console.log("project people resolution failed...");
			console.error(err);
			return null;
		}
	},
};
