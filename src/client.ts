import pkg from "@prisma/client";

const prismaClient = new pkg.PrismaClient();

try {
	await prismaClient.$connect();
} catch (error) {
	console.log("prisma connection error");

	console.log(error);
	process.exit(1);
}

//export { pool };
export default prismaClient;
