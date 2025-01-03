import express from 'express' ;
import cors from 'cors' ;
import guessRoute from './routes/guess.js'

const app = express()

app.use(cors())

app.use('/api/guess' , guessRoute)

const port = process.env.PORT || 4000
app.listen(port , () => {
    console.log(`Server is on port ${port}.`)
})