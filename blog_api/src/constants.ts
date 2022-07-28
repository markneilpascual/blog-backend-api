export const PORT : number = 4000
export const MYSQL_HOST: string = 'database' || 'localhost'
export const MYSQL_DATABASE: string = process.env.MYSQL_DATABASE ||  'blog'
export const MYSQL_USER: string = process.env.MYSQL_USER ||  'root'
export const MYSQL_PASSWORD: string = process.env.MYSQL_PASSWORD ||  ''
export const MYSQL_PORT: number = parseInt(process.env.MYSQL_PORT) ||  3306

console.log(MYSQL_HOST, MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD);
