import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

const PORT = 5000


const users = []
const tweets = []

app.post("/sign-up", (request, response) => {
    users.push(request.body)
    response.send("OK")
    console.log(users)
})

app.post("/tweets", (request, response) => {

    const userName = request.body.username
    const validation = users.find((u) => u.username === userName)
    console.log(validation)

    if (validation !== undefined) {
        tweets.push(request.body.tweet)
        response.send("OK")
        console.log(tweets)
    } else if(validation === undefined){
       response.send("UNAUTHORIZED")
    }
})




















app.listen(PORT, () => console.log(`teste porta:${PORT}`))