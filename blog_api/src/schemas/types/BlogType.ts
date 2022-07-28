import { GraphQLBoolean, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import BlogComment from "../../models/comment";
import User from "../../models/user";
import CommentType from "./CommentType";
import { UserType } from "./UserType";

export const BlogType = new GraphQLObjectType({
    name: "Blog",
    description: "Blog, blog details.",
    fields: () => ({
        id: {
            type: GraphQLNonNull(GraphQLInt)
        },
        slug: {
            type: GraphQLNonNull(GraphQLString)
        },
        author_id: {
            type: GraphQLNonNull(GraphQLInt)
        },
        author: {
            type: UserType,
            resolve: async (source, arg) => {
                let userModel = new User
                let user = await userModel.fetchUser(source.author_id)
                return user
            }
        },
        title: {
            type: GraphQLNonNull(GraphQLString)
        },
        content: {
            type: GraphQLNonNull(GraphQLString)
        },
        is_published: {
            type: GraphQLNonNull(GraphQLInt)
        },
        is_published_bool: {
            type: GraphQLNonNull(GraphQLBoolean),
            resolve: (source, args) => {
                return source.is_published ? true : false
            }
        },
        published_date: {
            type: GraphQLString
        },
        created_date: {
            type: GraphQLNonNull(GraphQLString)
        },
        comments: {
            type: GraphQLList(CommentType),
            resolve: async (source, args) => {
                let comment = new BlogComment
                let comments = comment.findByBlogID(source.id)
                return comments
            }
        }
    })
})