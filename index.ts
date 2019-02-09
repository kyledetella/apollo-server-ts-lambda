import { ApolloServer, gql } from "apollo-server-lambda";

const typeDefs = gql`
  type Pong {
    time: String!
    message: String!
  }

  type Query {
    ping: Pong!
  }
`;
const resolvers = {
  Query: {
    ping: () => ({ time: Date.now(), message: "__FOO__" })
  }
};

const server = new ApolloServer({ typeDefs, resolvers, introspection: true });

export const graphqlHandler = server.createHandler();
