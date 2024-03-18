import jwt from "jsonwebtoken";
export async function generateJWT(userId: number) {
	const token = jwt.sign({ userId: userId }, process.env.JWT_SECRET as string, {
		expiresIn: "1w",
	});
	return token;
}
