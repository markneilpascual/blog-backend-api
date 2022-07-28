import { GraphQLEnumType, GraphQLInputObjectType, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import User from "../../models/user";
import { userInputType } from "../inputs/user";
import { userRoleTypes } from "../types/enums/user";
import { UserType } from "../types/UserType";

export const createUser = {
    name: "Create new user",
    description: "Create new usear or author",
    type: UserType,
    args: {
        username: {
            type: GraphQLNonNull(GraphQLString)
        },
        email: {
            type: GraphQLNonNull(GraphQLString)
        },
        password: {
            type: GraphQLNonNull(GraphQLString)
        },
        first_name: {
            type: GraphQLNonNull(GraphQLString)
        },
        last_name: {
            type: GraphQLNonNull(GraphQLString)
        },
        role: {
            type: userRoleTypes
        },

    },
    resolve: async (source, args) => {
        let user = new User
        let createdUser = await user.createUser(args)
        return createdUser
    }
}

export const updateUser = {
    name: "Update new user",
    description: "Create new usear or author",
    type: UserType,
    args: {
        id: {
            type: GraphQLNonNull(GraphQLInt)
        },
        data: {
            type: userInputType
        }

    },
    resolve: async (source, args) => {
        let user = new User

        let updatedUser = await user.updateUser(args.id, args.data)
        return updatedUser
    }
}
