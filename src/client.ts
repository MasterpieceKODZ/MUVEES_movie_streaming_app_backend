import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

try {
	await prismaClient.$connect();
} catch (error) {
	console.log(error);
	process.exit(1);
}

export default prismaClient;
