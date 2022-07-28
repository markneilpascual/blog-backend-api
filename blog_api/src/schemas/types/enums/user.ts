import { GraphQLEnumType } from "graphql";

export const userRoleTypes = new GraphQLEnumType({
    name: "Roles",
    values: {
        ADMIN: { value: "admin" },
        EDITOR: { value: "editor" },
        MEMBER: { value: "member" },
    }

})