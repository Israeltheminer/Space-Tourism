require('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const port = process.env.PORT || 4040
const path = require('path');
const mongoose = require("mongoose")
const _ = require("lodash")
const expressLayouts = require("express-ejs-layouts")

const app = express()
const DIST = path.join(__dirname , "dist")


// Set View engine
app.use(expressLayouts)
app.set('layout', './layouts/general')
app.set('view engine', 'ejs');

app.use(cors())
app.use('/dist', express.static(DIST))
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (req, res) => {
   res.render("home",{
      path: "home"
   })
})


app.get('/destination', (req, res) => {
   res.render("destination", {
      path: "destination"
   })
})


app.get('/crew', (req, res) => {
   res.render("crew", {
      path: "crew"
   })
})


app.get('/technology', (req, res) => {
   res.render("technology", {
      path: "technology"
   })
})

app.listen(port, () => console.log(`Server listening on port ${port}`) );