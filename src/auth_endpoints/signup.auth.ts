import { Request, Response } from "express";
import prismaClient from "../client.js";
import crypto, { pbkdf2, pbkdf2Sync } from "crypto";
import { validateRequestBody } from "../utils/auth/validate.request.body.js";
import { hashPassword } from "../utils/auth/hash.password.js";
import { isUsernameTaken } from "../utils/auth/username.availability.js";

export async function signupAuth(req: Request, res: Response, next: any) {
	const isRequestBodyValid = await validateRequestBody(
		req.body.username,
		req.body.password,
	);

	if (!isRequestBodyValid) {
		res.status(400).send("invalid username or password");
	}

	if (await isUsernameTaken(req.body.username)) {
		res.status(400).send("username is taken by another user");
	}

	const hashedPasswordAndSalt = await hashPassword(req.body.password);

	// create a new user record in database
	try {
		const createdUser = await prismaClient.user.create({
			data: {
				username: req.body.username,
				passwordHash: hashedPasswordAndSalt.hashedPassword,
				salt: hashedPasswordAndSalt.salt,
				role: "user",
			},
		});

		res.send(
			JSON.stringify({
				username: createdUser.username,
				role: createdUser.role,
			}),
		);
	} catch (err) {
		res.status(500).send("INTERNAL_SEVER_ERROR");
	}
}
