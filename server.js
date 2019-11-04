const { ApolloServer } = require("apollo-server");

const typeDefs = `
  type Item {
    id: Int
    type: String
    description: String
  }

  type Query {
   items(type: String): [Item]
  }
`;

const items = [
  { id: 1, type: "prefix", description: "Air" },
  { id: 2, type: "prefix", description: "Jet" },
  { id: 3, type: "prefix", description: "Flight" },
  { id: 1, type: "sufix", description: "Hub" },
  { id: 2, type: "sufix", description: "Station" },
  { id: 3, type: "sufix", description: "Mart" },
];

const resolvers = {
  Query: {
    items(_, args) {
      return items.filter(i => i.type === args.type);
    }
  }
};


const server = new ApolloServer({ typeDefs, resolvers });

const port = process.env.PORT || 4000;
server.listen(port);

console.log(ApolloServer);