import { GraphQLObjectType } from "graphql";

import { Blogs, FindBlog } from "./blog";
import { Comments } from "./comment";
import { FindUser, Users } from "./user";


var RootQueryType = new GraphQLObjectType({
    name: "Query",
    fields: {
        users: Users,
        findUserByID: FindUser,
        blogs: Blogs,
        findBlogBySlug: FindBlog,
        comments: Comments
    }
})

export default RootQueryType;