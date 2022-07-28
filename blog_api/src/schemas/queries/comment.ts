import { GraphQLList } from "graphql"
import BlogComment from "../../models/comment"
import CommentType from "../types/CommentType"

export const Comments = {
    type: GraphQLList(CommentType),
    resolve: async (source, args) => {
        let comment = new BlogComment
        let comments = await comment.fetchAll()
        return comments || []
    }
}