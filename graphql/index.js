const { makeExecutableSchema } = require('graphql-tools');
const { expenses, incomes } = require('./fake-data');

// The GraphQL schema in string form
const typeDefs = `
  type Query { expenses: [Expense], incomes: [Income] }
  type Expense { id: String, value: String, currency: String, category: String, mainCategory: String, description: String, date: String }
  type Income { id: String, value: String, currency: String, source: String, description: String, date: String }
`;

// The resolvers
const resolvers = {
  Query: {
		expenses: () => expenses,
		incomes: () => incomes,
	},
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export { schema };
