// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()


// app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())
// app.use(express.static('public'))
// app.use(express.urlencoded({ extended: true }))

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


app.use(methodOverride('_ method'))
app.get('/', (req,res) => {
    res.render('home')
})

app.use('/places', require('./controllers/places'))
app.use(express.urlencoded({ extended: true }))


app.get('*',(req,res) => {
    // res.status(404).send('<h1>404 Page</h1>')
    res.render('error404')
})



app.listen(process.env.PORT)

