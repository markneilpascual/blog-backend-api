import { GraphQLSchema } from "graphql";
import RootMutationType from "./mutations";
import RootQueryType from "./queries";

var schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
})


export default schema