import { Request, Response } from "express";
import prismaClient from "../client.js";
import crypto, { pbkdf2, pbkdf2Sync } from "crypto";

export async function signupAuth(req: Request, res: Response, next: any) {
	// return an error code if username or password is not provided
	if (!req.body.username || !req.body.password) {
		res.status(400).send("faulty username or password");

		return;
	}

	// return an error code if username contains invalid characters
	if (/[^a-zA-Z0-9_@$+]/gi.test(req.body.username)) {
		res.status(400).send("your username username contains invalid characters");

		return;
	}

	// check if the username is taken by another user
	const isUserNameTaken = await prismaClient.user.findFirst({
		where: {
			username: req.body.username,
		},
	});

	if (isUserNameTaken?.username === req.body.username) {
		res.status(400).send("username is taken by another user");

		return;
	}

	// generate salt with which password will be hashed.
	const generatedPasswordSalt = crypto
		.randomBytes(256)
		.toString("base64")
		.replace(/\+/g, "x") // replace all + with x
		.replace(/\s/g, "v"); // replace all space with v

	// hash password
	const hashedPassword = pbkdf2Sync(
		req.body.password,
		generatedPasswordSalt,
		10000,
		1028,
		"sha512",
	).toString("hex");

	// create a new user record in database
	try {
		const createdUser = await prismaClient.user.create({
			data: {
				username: req.body.username,
				passwordHash: hashedPassword,
				salt: generatedPasswordSalt,
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
