import { GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import Blog from "../../models/blog";
import { BlogType } from "./BlogType";

export const UserType = new GraphQLObjectType({
    name: "User",
    description: "User, also an author of a blog",
    fields: () => ({
        id: {
            type: GraphQLNonNull(GraphQLInt)
        },
        username: {
            type: GraphQLNonNull(GraphQLString)
        },
        password: {
            type: GraphQLNonNull(GraphQLString)
        },
        email: {
            type: GraphQLNonNull(GraphQLString)
        },
        first_name: {
            type: GraphQLNonNull(GraphQLString)
        },
        last_name: {
            type: GraphQLNonNull(GraphQLString)
        },
        role: {
            type: GraphQLNonNull(GraphQLString)
        },
        blogs: {
            type: GraphQLList(BlogType),
            resolve: async (source, args, context) => {
                let blog = new Blog
                let blogs = await blog.fetchBlogs(source.id)
                return blogs
            }
        }
    })
})