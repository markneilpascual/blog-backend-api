import { GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import Blog from "../../models/blog";
import { BlogType } from "../types/BlogType";


export const Blogs = {
    type: GraphQLList(BlogType),
    resolve: async (source, arg) => {
        let blog = new Blog
        let blogs = await blog.fetchBlogs()
        return blogs
    }
}

export const FindBlog = {
    type: BlogType,
    description: "Find blog by its slug",
    args: {
        slug: {
            type: GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async (source, args) => {
        let blogModel = new Blog
        let blog = await blogModel.fetchBlog(args.slug)
        return blog
    }
}