require('dotenv').config() //need to require dotenv package to ensure the value of the MONGO_URI environment varaible can be used.
const mongoose = require('mongoose')

// Connect Mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
module.exports.Place = require('./places')