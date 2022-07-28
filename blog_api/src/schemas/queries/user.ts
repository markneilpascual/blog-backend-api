import { GraphQLInt, GraphQLList, GraphQLNonNull } from "graphql";
import User from "../../models/user";
import { UserType } from "../types/UserType";

export const Users = {
    type: GraphQLList(UserType),
    description : "Returns all users",
    resolve: async (source, arg) => {
        let userModel = new User;
        let users = await userModel.fetchUsers()

        return users
    }
}

export const FindUser = {
    type: UserType,
    description: "Find user by its ID",
    args: {
        id: {
            type: GraphQLNonNull(GraphQLInt)
        }
    },
    resolve: async (source, args) => {
        let userModel = new User
        let user = await userModel.fetchUser(args.id)
        return user
    }
}