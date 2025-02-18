const express = require('express')
const path = require('path')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')
const articleRoutes = require('../routes/articles')

const app = express()

app.set('views', path.join(__dirname, '/../views'))
app.set('view engine', 'hbs')
app.engine('hbs', hbs.engine ({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname + '/../views/layouts/')
} ))

app.use(express.json)
app.use(express.urlencoded({extended: true} ))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true} ))

app.use('/', articleRoutes) 
console.log('Routes have been set up')

module.exports = app