const { makeExecutableSchema } = require('graphql-tools');
const { categories, expenses, incomes } = require('./fake-data');

// The GraphQL schema in string form
const typeDefs = `
  type Query { categories: [Category], expenses: [Expense], incomes: [Income] }
  type Category { id: String, name: String, mainCategory: String }
  type Expense { id: String, value: Int, currency: String, category: String, mainCategory: String, description: String, date: String }
  type Income { id: String, value: String, currency: String, source: String, description: String, date: String }
`;

// The resolvers
const resolvers = {
  Query: {
		categories: () => categories,
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
