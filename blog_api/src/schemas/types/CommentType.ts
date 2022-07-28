import { GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import Blog from "../../models/blog";
import User from "../../models/user";
import { BlogType } from "./BlogType";
import { UserType } from "./UserType";

const CommentType = new GraphQLObjectType({
    name: "BlogComment",
    description: "Comment from a blog",
    fields: () => ({
        id: {
            type: GraphQLNonNull(GraphQLInt)
        },
        blog_id: {
            type: GraphQLNonNull(GraphQLInt)
        },
        blog: {
            type: BlogType,
            resolve: async (source, args) => {
                let blogModel = new Blog
                let blog = await blogModel.fetchBlogByID(source.blog_id)
                return blog
            }
        },
        author_id: {
            type: GraphQLNonNull(GraphQLInt)
        },
        author: {
            type: UserType,
            resolve: async (source, args) => {
                let userModel = new User
                let user = await userModel.fetchUser(source.author_id)
                return user
            }
        },
        comment: {
            type: GraphQLNonNull(GraphQLString)
        },
        created_date: {
            type: GraphQLNonNull(GraphQLString)
        }
    })
})

export default CommentType