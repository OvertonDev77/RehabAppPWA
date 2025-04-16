import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { readFileSync } from "fs";
import { join } from "path";
import { resolvers } from "../../../../graphql/resolvers";

const schemaPath = join(process.cwd(), "graphql", "schema.graphql");
const typeDefs = readFileSync(schemaPath, "utf-8");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true, // Enable introspection
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req) => ({
    // your context here
  }),
});

// Enable CORS and handle OPTIONS requests
export async function OPTIONS(request: Request) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
  return new Response(null, { status: 204, headers });
}

export async function GET(req: Request) {
  return handler(req);
}

export async function POST(req: Request) {
  return handler(req);
}
