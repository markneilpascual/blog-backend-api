import connection from "../database/database"
import { BlogModelInterface, BlogObject, CreateBlogType } from "../types"
import { parseRowDataPacket } from "../utils"

class Blog implements BlogModelInterface {
    fetchBlogs(author_id: number = null): Promise<BlogObject[] | any[]> {
        return new Promise((resolve, reject) => {
            var query = "SELECT * FROM blogs"

            if (author_id)
                query += ` WHERE author_id = ${author_id}`


            connection.query(query, (error, result, fields) => {

                if (error) reject(error)
                let blogs = parseRowDataPacket(result)
                resolve(blogs)
            })
        })
    }


    fetchBlog(slug: string): Promise<BlogObject> {
        return new Promise((resolve, reject) => {
            var query = `SELECT * FROM blogs WHERE slug = '${slug}' LIMIT 1`
            connection.query(query, (error, result, fields) => {

                if (error) reject(error)
                let blog = parseRowDataPacket(result)
                resolve(blog[0])
            })
        })
    }

    fetchBlogByID(id: number): Promise<BlogObject> {
        return new Promise((resolve, reject) => {
            var query = `SELECT * FROM blogs WHERE id = '${id}' LIMIT 1`
            connection.query(query, (error, result, fields) => {

                if (error) reject(error)
                let blog = parseRowDataPacket(result)
                resolve(blog[0])
            })
        })
    }

    createBlog(blog: CreateBlogType): Promise<BlogObject> {
        return new Promise<BlogObject>((resolve, reject) => {
            let query = `INSERT INTO blogs(author_id, slug, title, content)
            VALUES ('${blog.author_id}', '${blog.slug}', '${blog.title}', '${blog.content}')`
            connection.query(query, async (error, result, fields) => {
                if (error) reject(error)

                try {
                    let newBlog = await this.fetchBlogByID(result.insertId)
                    resolve(newBlog)
                }
                catch (e) {
                    reject(e)
                }

            })
        })
    }

    deleteBlog = (id: number) => {
        return new Promise<boolean>((resolve, reject) => {
            let query = ` DELETE FROM blogs WHERE id = ${id}`
            connection.query(query, async (error, result, fields) => {
                if (error) reject(error)
                resolve(true)
            })
        })
    }

    publishBlog = (id: number) => {
        return new Promise<boolean>((resolve, reject) => {
            let date: string = new Date().toISOString().slice(0, 19).replace('T', ' ')

            let query = ` UPDATE blogs SET is_published = 1, published_date = '${date}' WHERE id = ${id}`
            connection.query(query, async (error, result, fields) => {
                if (error) reject(error)
                resolve(true)
            })
        })
    }

    unpublishBlog = (id: number) => {
        return new Promise<boolean>((resolve, reject) => {
            let query = ` UPDATE blogs SET is_published = 0, published_date = NULL WHERE id = ${id}`
            connection.query(query, async (error, result, fields) => {
                if (error) reject(error)
                resolve(true)
            })
        })
    }
}

export default Blog