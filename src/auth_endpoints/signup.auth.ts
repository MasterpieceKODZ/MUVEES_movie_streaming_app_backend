import { Request, Response } from "express";
import { createNewUser } from "../utils/auth/create.new.user.js";
import {
	isUsernameTaken,
	validateRequestBody,
} from "../utils/auth/validate.request.body.js";

export async function signupAuth(req: Request, res: Response) {
	const [isRequestBodyValid, usernameTaken] = await Promise.all([
		validateRequestBody(req.body.username, req.body.password),
		isUsernameTaken(req.body.username),
	]);

	if (!isRequestBodyValid) {
		res.status(400).send("invalid username or password");

		return;
	}

	if (usernameTaken) {
		res.status(400).send("username is taken by another user");

		return;
	}

	try {
		const createUser = await createNewUser(
			req.body.username,
			req.body.password,
		);

		res.send(
			JSON.stringify({ username: createUser.username, role: createUser.role }),
		);

		return;
	} catch (err) {
		res.status(500).send("INTERNAL_SEVER_ERROR");
	}
}
