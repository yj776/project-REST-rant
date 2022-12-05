// const express = require('express')
// const app = express()
const router = require('express').Router()
const places = require('../models/places.js')

// Get /places
router.get('/', (req,res) => {
      // let places = [{
      //   name: 'H-Thai-ML',
      //   city: 'Seattle',
      //   state: 'WA',
      //   cuisines: 'Thai, Pan-Asian',
      //   pic: '/images/thai-food.jpg'
      //   // pic: 'http://placekitten.com/250/250'
      // }, {
      //   name: 'Coding Cat Cafe',
      //   city: 'Phoenix',
      //   state: 'AZ',
      //   cuisines: 'Coffee, Bakery',
      //   pic: '/images/cat-cafe.jpg'
      //   // pic: 'http://placekitten.com/250/250'
      // }]
  
    res.render('places/index', {places})
})

// places/new route
router.get('/new', (req, res) => {
  res.render('places/new')
})

// Post/ place route
router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

// Get /places/show route
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id })
  }
})

// Delete Route
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})

// Edit Route
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id] })
  }
})



module.exports = router