import prismaClient from "../../client.js";
export async function validateRequestBody(username: string, password: string) {
	if (!username || !password) return false;
	// return an false if username or password contains invalid characters
	if (/[^a-zA-Z0-9_@$+]/gi.test(username) || /\s/gi.test(password))
		return false;
	return true;
}
export async function isUsernameTaken(username: string) {
	try {
		const user = await prismaClient.users.findFirst({
			where: {
				username,
			},
		});

		return user?.username ? true : false;
	} catch (err) {
		console.log("error on is username taken");
		console.error(err);
		return true;
	}
	false;
}
