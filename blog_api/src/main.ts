import express from "express"
import { graphqlHTTP } from "express-graphql"
import { PORT } from "./constants"
import schema from "./schemas"

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false }));


app.use("/", graphqlHTTP({
    schema: schema,
    graphiql: true
}))


app.listen(PORT, () => {
    console.log(`API is ready.`)
})