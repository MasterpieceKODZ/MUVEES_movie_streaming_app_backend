import prismaClient from "../../client.js";
export async function validateRequestBody(username: string, password: string) {
	if (!username || !password) return false;
	// return an false if username or password contains invalid characters
	if (
		/[^a-zA-Z0-9_@$+]/gi.test(username) ||
		/[^a-zA-Z0-9_@$+]/gi.test(password)
	)
		return false;
	return true;
}
export async function isUsernameTaken(username: string) {
	try {
		const userName = await prismaClient.user.findFirst({
			where: {
				username,
			},
		});
		if (
			(userName === null || userName === void 0
				? void 0
				: userName.username) === username
		)
			return true;
	} catch (err) {
		console.log("error on is username taken");
		console.error(err);
		return true;
	}
	false;
}
