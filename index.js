require('dotenv').config()
const express = require('express')
const app = express()


app.use('/places', require('./controllers/places'))

app.get('/', (req,res) => {
    res.send('Hello world!')
})

app.get('*',(req,res) => {
    // res.status(404).send('<h1>404 Page</h1>')
    res.render('error404')
})

app.listen(process.env.PORT)

