
import { GraphQLBoolean, GraphQLInt, GraphQLNonNull, GraphQLString } from "graphql"; import BlogComment from "../../models/comment";
import CommentType from "../types/CommentType";

export const createComment = {
    type: CommentType,
    name: "createBlog",
    args: {
        author_id: {
            type: GraphQLNonNull(GraphQLInt)
        },
        blog_id: {
            type: GraphQLNonNull(GraphQLInt)
        },
        content: {
            type: GraphQLNonNull(GraphQLString)
        },
    },
    resolve: async (source, args) => {
        let commentModel = new BlogComment
        try {
            let newBlog = await commentModel.createComment(args.author_id, args.blog_id, args.content)
            console.log(newBlog);

            return newBlog
        }
        catch (e) {
            return e
        }

    }

}


export const deleteComment = {
    type: GraphQLBoolean,
    name: "deleteComment",
    args: {
        id: {
            type: GraphQLNonNull(GraphQLInt)
        }
    },
    resolve: async (source, args) => {
        let commentModel = new BlogComment
        try {
            commentModel.deleteComment(args.id)
            return true
        }
        catch (e) {
            return e
        }
    }
}