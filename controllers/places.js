// const express = require('express')
// const app = express()
const router = require('express').Router()
// const places = require('../models')

// Get /places
router.get('/', (req,res) => {
      let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai-food.jpg'
        // pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/cat-cafe.jpg'
        // pic: 'http://placekitten.com/250/250'
      }]
  
    res.render('places/index', {places})
})

// places/new route
router.get('/new', (req, res) => {
  res.render('places/new')
})



// Get /places/show route
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else {
    res.render('places/show', {place:places[id],id})     
  }
})


module.exports = router