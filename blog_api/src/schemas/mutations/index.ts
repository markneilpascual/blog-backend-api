import { GraphQLObjectType } from "graphql";
import { createUser, updateUser } from "./users";
import { createBlog, publishBlog, unpublishBlog, deleteBlog } from "./blogs";
import { createComment, deleteComment } from "./comment";

var RootMutationType = new GraphQLObjectType({
    name: "Mutation",
    fields: (): any => ({
        createUser,
        updateUser,
        createBlog,
        publishBlog,
        unpublishBlog,
        deleteBlog,
        addComment: createComment,
        deleteComment
    })
})

export default RootMutationType