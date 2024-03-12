export async function validateRequestBody(
	username: string,
	password: string,
): Promise<boolean> {
	if (!username || !password) return false;

	// return an error code if username contains invalid characters
	if (/[^a-zA-Z0-9_@$+]/gi.test(username)) return false;

	return true;
}
