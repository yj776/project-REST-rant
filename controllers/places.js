// const express = require('express')
// const app = express()
const router = require('express').Router()

// Get /places
router.get('/', (req,res) => {
      let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
  
    res.render('places/index', {places})
})

module.exports = router


// GET /places
// router.get('/',(req,res) => {
//     // res.send('GET/places')
//     res.render('places/index')
// })
// GET /places
// router.get('/', (req, res) => {
//     res.render('places/index')
//   })

  // GET /places
// app.get('/', (req,res) => {
//     let places = [{
//         name: 'H-Thai-ML',
//         city: 'Seattle',
//         state: 'WA',
//         cuisines: 'Thai, Pan-Asian',
//         pic: 'http://placekitten.com/250/250'
//       }, {
//         name: 'Coding Cat Cafe',
//         city: 'Phoenix',
//         state: 'AZ',
//         cuisines: 'Coffee, Bakery',
//         pic: 'http://placekitten.com/250/250'
//       }]      
//       res.render('places/index', {places})
// })




