import { Request, Response } from "express";
import { validateRequestBody } from "../../utils/auth/validate.request.body.js";

import { verifyPassword } from "../../utils/auth/compare.password.js";
import prismaClient from "../../client.js";

export async function loginAuth(req: Request, res: Response) {
	if (!(await validateRequestBody(req.body.username, req.body.password))) {
		res.status(400).send("INVALID_CREDENTIALS");
		return;
	}

	try {
		const user = await prismaClient.users.findFirst({
			where: {
				username: req.body.username,
			},
		});

		if (!user?.id) {
			res.status(400).send("NOT_FOUND");
			return;
		}

		const isAmatch = await verifyPassword(
			req.body.password,
			user.salt,
			user.passwordHash,
		);

		if (isAmatch) {
			res.send({ username: user.username, role: user.role });
			return;
		} else {
			res.status(400).send("NOT_FOUND");
		}
	} catch (error) {
		res.status(500).send("INTERNAL_SERVER_ERROR");
		return;
	}
}
