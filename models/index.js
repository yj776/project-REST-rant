const mongoose = require('mongoose')

// Connect Mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
module.exports.Place = require('./places')