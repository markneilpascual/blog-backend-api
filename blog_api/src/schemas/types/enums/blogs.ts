import { GraphQLEnumType } from "graphql";

export const blogPublishTypes = new GraphQLEnumType({
    name: "Blog Publish",
    values: {
        Published: { value: 1 },
        Unpublished: { value: 0 },
    }

})