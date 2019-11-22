const { ApolloServer } = require("apollo-server");

// template literal, com suas entidades
const typeDefs = `

  type Item {
    id: Int
    type: String
    description: String
  }

  type Domain {
    name: String
    checkout: String
  }

  type Query {
    items (type: String): [Item]
  }

  input ItemInput {
    type: String
    description: String
  }

  type Mutation {
    saveItem(item: ItemInput): Item
    deleteItem(id: Int): Boolean
    generateDomains: [Domain]
  }

`;

const items = [
  { id: 1, type: "prefix", description: "Air" },
  { id: 2, type: "prefix", description: "Jet" },
  { id: 3, type: "prefix", description: "Flight" },
  { id: 4, type: "sufix", description: "Hub" },
  { id: 5, type: "sufix", description: "Station" },
  { id: 6, type: "sufix", description: "Mart" },
];

const resolvers = {
  Query: {
    items(_, args) {
      return items.filter(item => item.type === args.type);
    }
  },
  Mutation: {
    saveItem(_, args) {
      const item = args.item;
      item.id = Math.floor(Math.random() * 1000);
      items.push(item);
      return item;
    },
    deleteItem(_, args) {
      const id = args.id;
      const item = items.find(item => item.id === id);
      if (!item) return false;
      items.splice(items.indexOf(item), 1);
      return true;
    },
    generateDomains() {
      const domains = [];
      for (const prefix of items.filter(item => item.type === "prefix")) {
        for (const sufix of items.filter(item => item.type === "sufix")) {
          const name = prefix.description + sufix.description;
          const url = name.toLowerCase();
          const checkout = `https://checkout.hostgator.com.br/?a=add&sld=${url}&tld=.com.br`;
          domains.push({
            name,
            checkout
          });
        }
      }
      return domains;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers })
server.listen();