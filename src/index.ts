import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import e from "express";
import { createServer } from "http";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { graphqlTypeDef } from "./graphql/graphql.type.def.js";
import { resolversMap } from "./graphql/resolvers/resolvers.map.js";
import authRouter from "./rest_endpoints/auth/router.js";
import prismaClient from "./client.js";
const app = e();
app.use(e.json());
const httpServer = createServer(app);
const apolloServer = new ApolloServer({
	typeDefs: graphqlTypeDef,
	resolvers: resolversMap,
	plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await apolloServer.start();
// AUTHENTICATION
app.use("/auth", authRouter);
// GRAPH-QL
app.use(
	"/graphql",
	(req, res, next) => {
		next();
	},
	expressMiddleware(apolloServer),
);

// START SERVER
httpServer.listen(4055, () => {
	console.log("muvees backend listening on port 4055");
});
