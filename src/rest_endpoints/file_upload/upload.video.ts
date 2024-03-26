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
	// try {
	// 	const uploadParallel = new Upload({
	// 		client: s3Client,
	// 		queueSize: 4,
	// 		partSize: 5542880,
	// 		leavePartsOnError: false,
	// 		params,
	// 	});
	// 	// checking progress of upload
	// 	uploadParallel.on("httpUploadProgress", (progress) => {
	// 		console.log(progress);
	// 	});
	// 	// after completion of upload
	// 	uploadParallel.done().then((data) => {
	// 		console.log("upload completed!", { data });
	// 		res.send(data);
	// 	});
	// } catch (err) {
	// 	res.status(500).send({
	// 		success: false,
	// 		message: err.message,
	// 	});
	// }
}
