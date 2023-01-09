import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

const PORT = 5000


const users = []
const tweets = []
let validation = ""
app.post("/sign-up", (request, response) => {
    users.push(request.body)
    response.send("OK")
    console.log(users)
})

app.post("/tweets", (request, response) => {

    validation = users.map((u) => u.username)
    if(validation.includes(request.body.username)){
        const user = users.find((u) => u.username === request.body.username)
        const avatar = user.avatar
        const tweet = {username: request.body.username, avatar: avatar, tweet: request.body.tweet}
        tweets.push(tweet)
        response.send("OK")
    } else{
        response.send("UNAUTHORIZED")
    }
   
})

app.get("/tweets", (request, response) => {
   let lastTen = tweets.slice((tweets.length - 11), tweets.length)
})

app.listen(PORT, () => console.log(`teste porta:${PORT}`))