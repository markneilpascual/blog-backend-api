import connection from "../database/database"
import { BlogCommentType } from "../types"
import { parseRowDataPacket } from "../utils"

class BlogComment {


    createComment = (author_id: number, blog_id: number, comment: string): Promise<BlogCommentType> => {
        return new Promise((resolve, reject) => {
            let query = ` INSERT INTO comments (author_id, blog_id, comment) VALUES(${author_id}, ${blog_id}, '${comment}')`
            connection.query(query, async (error, result, fields) => {
                if (error) reject(error)
                try {
                    let commentModel = new BlogComment
                    let comment = await commentModel.findByID(result.insertId)
                    resolve(comment)
                }
                catch (e) {
                    reject(e)
                }
            })
        })
    }

    deleteComment = (id: number) => {
        return new Promise((resolve, reject) => {
            let query = ` DELETE FROM comments WHERE id = ${id}`
            connection.query(query, async (error, result, fields) => {
                if (error) reject(error)
                resolve(true)
            })
        })
    }

    fetchAll = (): Promise<BlogCommentType[]> => {
        return new Promise<BlogCommentType[]>((resolve, reject) => {
            connection.query(`SELECT * FROM comments`, (error, result, fields) => {
                if (error) reject(error)
                let comments = parseRowDataPacket(result)

                resolve(comments)
            })
        })
    }

    findByID = (id: number): Promise<BlogCommentType> => {
        return new Promise<BlogCommentType>((resolve, reject) => {
            connection.query(`SELECT * FROM comments WHERE id = ${id} LIMIT 1`, (error, result, fields) => {
                if (error) reject(error)
                let comments = parseRowDataPacket(result)

                resolve(comments[0])
            })
        })
    }


    findByBlogID = (blog_id: number): Promise<BlogCommentType[]> => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM comments WHERE blog_id = ${blog_id}`, (error, result, fields) => {
                if (error) reject(error)
                let comments = parseRowDataPacket(result)

                resolve(comments)
            })
        })
    }
}



export default BlogComment
