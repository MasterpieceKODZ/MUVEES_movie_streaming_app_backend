import { Upload } from "@aws-sdk/lib-storage";
//import s3Client from "../../utils/s3.client.js";
import { Request, Response } from "express";
export async function uploadVideo(req: Request, res: Response) {
	if (!req.file) {
		res.status(400).send("FILE_NOT_FOUND");
		return;
	}
	const file = req.file;
	const params = {
		Bucket: "BUCKET_NAME",
		Key: file.originalname,
		Body: file.buffer,
	};
}
