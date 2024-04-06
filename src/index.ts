import prismaClient from "./client.js";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import e, { Request, Response } from "express";
import { createServer } from "http";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { graphqlTypeDef } from "./graphql/graphql.type.def.js";
import { resolversMap } from "./graphql/resolvers/resolvers.map.js";
import authRouter from "./rest_endpoints/auth/router.js";
import serverless from "serverless-http";
const app = e();
app.use(e.json());
const httpServer = createServer(app);
const apolloServer = new ApolloServer({
	typeDefs: graphqlTypeDef,
	resolvers: resolversMap,
	plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await apolloServer.start();

app.get("/", async (req: Request, res: Response) => {
	res.send("MUVEES BACKEND REACHED SUCCESSFULLY");
});
// AUTHENTICATION
app.use("/auth", authRouter);
// GRAPH-QL
app.use("/graphql", expressMiddleware(apolloServer));

// app.listen(4055, () => {
// 	console.log("muvees backend running on port 4055");
// });

export const handler = serverless(app);
