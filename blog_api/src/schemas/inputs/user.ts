import { GraphQLInputObjectType, GraphQLString } from "graphql";
import { userRoleTypes } from "../types/enums/user";

export const userInputType = new GraphQLInputObjectType({
    name: "userInputType",
    fields: () => ({
        username: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        },
        first_name: {
            type: GraphQLString
        },
        last_name: {
            type: GraphQLString
        },
        role: {
            type: userRoleTypes
        }
    })
})