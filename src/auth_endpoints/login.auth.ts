import { Request, Response } from "express";

export async function loginAuth(req: Request, res: Response, next: any) {
	res.send("muvees backend login authentication API endpoint called");
}
