// Imports express and ejs
var express = require ('express')
var ejs = require('ejs')

// Imports mysql module
var mysql = require('mysql2')

// Creates the express application object
const app = express()
const port = 8000

// Tells Express that we want to use EJS as the templating engine
app.set('view engine', 'ejs')

// Sets up the body parser 
app.use(express.urlencoded({ extended: true }))

// Sets up public folder (for css and statis js)
app.use(express.static(__dirname + '/public'))

// Defines the database connection
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'drentals_booking_system',
    password: 'drentals2025',
    database: 'drentals_4u'
})
// Connects to the database
db.connect((err) => {
    if (err) {
        throw err
    }
    console.log('Connected to database')
})
global.db = db

// Defines our application-specific data
app.locals.shopData = {shopName: "DRentals4U"}

// Loads the route handlers
const mainRoutes = require("./routes/main")
app.use('/', mainRoutes)

// Loads the route handlers for /users
const usersRoutes = require('./routes/users')
app.use('/users', usersRoutes)

// Loads the route handlers for /cars
const carsRoutes = require('./routes/cars')
app.use('/cars', carsRoutes)

// Starts the web app listening
app.listen(port, () => console.log(`Node app listening on port ${port}!`))