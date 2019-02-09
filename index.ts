import { ApolloServer, gql } from "apollo-server-lambda";

const typeDefs = gql`
  type Pong {
    time: String!
    message: String!
    meta: String!
  }

  type Query {
    ping: Pong!
  }
`;

const resolvers = {
  Query: {
    ping: () => ({
      message: "__FOO__",
      time: Date.now()
    })
  }
};

const server = new ApolloServer({
  introspection: true,
  resolvers,
  typeDefs
});

export const graphqlHandler = server.createHandler({
  cors: {
    credentials: true,
    origin: true
  }
});
