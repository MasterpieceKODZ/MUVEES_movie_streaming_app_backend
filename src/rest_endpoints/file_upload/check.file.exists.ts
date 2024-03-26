import { Request, RequestHandler, Response } from "express";
//import s3Client from "../../utils/s3.client.js";
import { GetObjectCommand } from "@aws-sdk/client-s3";
export async function fileExistsCheck(req: Request, res: Response, next: any) {
	if (!req.file) {
		res.status(400).send("FILE_NOT_FOUND");
		return;
	}
	console.log("file data >>>>>>>>>>>>>>>>>>>>>>");
	console.log(req.file);
	try {
		const getObjectParams = {
			Bucket: "YOUR_BUCKET_NAME",
			Key: req.file.originalname, // Assuming Multer provides the original filename
		};
		//  const object = s3Client.send(new GetObjectCommand(getObjectParams));
		// console.log("object from s3 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
		// console.log(object);
		// File already exists
		return res.status(400).json({ message: "DUPLICATE_FILE_KEY" });
	} catch (error) {
		console.log("check file existence error >>>>>>>>>>>>>>>>>>>>>>");
		console.log(error);
		next();
	}
}
