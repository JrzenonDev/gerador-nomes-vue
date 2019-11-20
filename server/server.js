const { ApolloServer } = require("apollo-server");

// template literal, com suas entidades
const typeDefs = `

  type Item {
    id: Int
    type: String
    description: String
  }

  type Query {
    items (type: String): [Item]
  }

`;

const items = [
  { id: 1, type: "prefixes", description: "Air" },
  { id: 2, type: "prefixes", description: "Jet" },
  { id: 3, type: "prefixes", description: "Flight" },
  { id: 4, type: "sufixes", description: "Hub" },
  { id: 5, type: "sufixes", description: "Station" },
  { id: 6, type: "sufixes", description: "Mart" },
];

const resolvers = {
  Query: {
    items(_, args) {
      console.log(args);
      return items.filter(item => item.type === args.type);
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers })
server.listen();