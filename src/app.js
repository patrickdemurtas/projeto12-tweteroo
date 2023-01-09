import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

const PORT = 5000


const users = []
const tweets = []

app.post('/sign-up', (request, response) => {
   users.push(request.body)
   response.send("OK")
   console.log(users)
})




















app.listen(PORT, () => console.log(`teste porta:${PORT}`))