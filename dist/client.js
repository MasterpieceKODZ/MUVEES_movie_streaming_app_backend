//import pkg, { PoolClient } from "pg";
// const { Pool } = pkg;
// //Create a PostgreSQL pool
// const pool = new Pool({
// 	connectionString: process.env.DATABASE_URL,
// });
// pool.connect();
// pool.on("error", (err: Error, client: PoolClient) => {
// 	console.log("database connection lost");
// 	process.exit(1);
// });
// pool.on("connect", (client: PoolClient) => {
// 	console.log("pg pool connected successfully");
// });
// ***************************************************************
import pkg from "@prisma/client";
const prismaClient = new pkg.PrismaClient();
try {
    await prismaClient.$connect();
}
catch (error) {
    console.log("prisma connection error");
    console.log(error);
    process.exit(1);
}
//export { pool };
export default prismaClient;
