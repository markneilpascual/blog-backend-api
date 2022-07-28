import { BlogType } from "../types/BlogType";
import { GraphQLBoolean, GraphQLInt, GraphQLNonNull, GraphQLString } from "graphql";
import Blog from "../../models/blog";

var _ = require('lodash');

export const createBlog = {
    type: BlogType,
    name: "createBlog",
    args: {
        author_id: {
            type: GraphQLNonNull(GraphQLInt)
        },
        slug: {
            type: GraphQLNonNull(GraphQLString)
        },
        title: {
            type: GraphQLNonNull(GraphQLString)
        },
        content: {
            type: GraphQLNonNull(GraphQLString)
        },
    },
    resolve: async (source, args) => {
        let blog = new Blog
        try {
            let newBlog = await blog.createBlog({ ...args, slug: _.kebabCase(args.slug) })
            return newBlog
        }
        catch (e) {
            return e
        }

    }

}

export const publishBlog = {
    type: GraphQLBoolean,
    description: "Publish blog",
    args: {
        id: {
            type: GraphQLNonNull(GraphQLInt)
        }
    },
    resolve: async (source, args) => {
        try {
            let blogModel = new Blog
            await blogModel.publishBlog(args.id)
            return true
        }
        catch (e) {
            return e
        }
    }
}

export const unpublishBlog = {
    type: GraphQLBoolean,
    description: "Unpublish blog",
    args: {
        id: {
            type: GraphQLNonNull(GraphQLInt)
        }
    },
    resolve: async (source, args) => {
        try {
            let blogModel = new Blog
            await blogModel.unpublishBlog(args.id)
            return true
        }
        catch (e) {
            return e
        }
    }
}

export const deleteBlog = {
    type: GraphQLBoolean,
    description: "Delete blog",
    args: {
        id: {
            type: GraphQLNonNull(GraphQLInt)
        }
    },
    resolve: async (source, args) => {
        try {
            let blogModel = new Blog
            await blogModel.deleteBlog(args.id)
            return true
        }
        catch (e) {
            return e
        }
    }
}