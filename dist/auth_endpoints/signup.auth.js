import { validateRequestBody } from "../utils/auth/validate.request.body.js";
import { hashPassword } from "../utils/auth/hash.password.js";
import { isUsernameTaken } from "../utils/auth/username.availability.js";
import { createNewUser } from "../utils/auth/create.new.user.js";
export async function signupAuth(req, res, next) {
    const isRequestBodyValid = await validateRequestBody(req.body.username, req.body.password);
    if (!isRequestBodyValid) {
        res.status(400).send("invalid username or password");
    }
    if (await isUsernameTaken(req.body.username)) {
        res.status(400).send("username is taken by another user");
    }
    const hashedPasswordAndSalt = await hashPassword(req.body.password);
    try {
        const createUser = await createNewUser(req.body.username, hashedPasswordAndSalt.hashedPassword, hashedPasswordAndSalt.salt);
        res.send(JSON.stringify({ username: createUser.username, role: createUser.role }));
    }
    catch (err) {
        res.status(500).send("INTERNAL_SEVER_ERROR");
    }
}
