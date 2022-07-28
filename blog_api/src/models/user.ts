import connection from "../database/database"
import { createUserType, updateUserType, UserModelInterface, UserObject } from "../types"
import { parseRowDataPacket } from "../utils"

class User implements UserModelInterface {

    public fetchUsers() {
        return new Promise<UserObject[]>((resolve, reject) => {
            connection.query("SELECT * FROM users", (error, result, fields) => {

                if (error) reject(error)
                resolve(parseRowDataPacket(result))
            })
        })
    }

    public fetchUser(id) {
        return new Promise<UserObject>((resolve, reject) => {
            connection.query(`SELECT * FROM users WHERE id = ${id}`, (error, result, fields) => {
                if (error) reject(error)
                let user = parseRowDataPacket(result)

                resolve(user[0])
            })
        })
    }


    public createUser(user: createUserType) {
        return new Promise<UserObject>((resolve, reject) => {
            let query = `INSERT INTO users(username, email, password, first_name, last_name, role)
            VALUES ('${user.username}', '${user.email}', '${user.password}', '${user.first_name}', '${user.last_name}', '${user.role}')`
            connection.query(query, async (error, result, fields) => {
                if (error) reject(error)

                let newUser = await this.fetchUser(result.insertId)
                resolve(newUser)
            })
        })
    }

    public async updateUser(id: number, user: updateUserType) {

        let userData = await this.fetchUser(id)
        user = { ...userData, ...user }


        return new Promise<UserObject>((resolve, reject) => {
            let query = `UPDATE users SET username= '${user.username}', email = '${user.email}', first_name = '${user.first_name}', last_name='${user.last_name}', role= '${user.role}' WHERE id = ${id}`
            connection.query(query, async (error, result, fields) => {
                if (error) reject(error)

                let updatedUser = await this.fetchUser(id)
                resolve(updatedUser)

            })
        })
    }
}

export default User