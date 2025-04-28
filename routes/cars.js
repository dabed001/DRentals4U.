const express = require("express")
const router = express.Router()

router.get('/search_result', function (req, res, next) {
    // Search the database
    let sqlquery = "SELECT * FROM cars WHERE name LIKE '%" + req.query.search_text + "%'" // Query database to get all the cars
    // Execute sql query
    db.query(sqlquery, (err, result) => {
        if (err) {
            next(err)
        }
        res.render("availableCars.ejs", {availableCars:result})
     }) 
})

router.get('/availableCars', function(req, res, next) {
    let sqlquery = "SELECT * FROM cars" // Query database to get all available cars
    // Execute sql query
    db.query(sqlquery, (err, result) => {
        if (err) {
            next(err)
        }
        res.render("availableCars.ejs", {availableCars:result})
     })
})

router.get('/carListing', function (req, res, next) {
    res.render('carListing.ejs')
})

router.post('/carListed', function (req, res, next) {
    // Saving data in the database
    let sqlquery = "INSERT INTO cars (name, price) VALUES (?,?)"
    // Execute sql query
    let newcar = [req.body.name, req.body.price]
    db.query(sqlquery, newcar, (err, result) => {
        if (err) {
            next(err)
        }
        else
            res.send('The following vehicle has been listed, name: '+ req.body.name + ' price '+ req.body.price)
    })
}) 

router.post('/booking', function (req, res, next) {
    const carNo = req.body.carNo;
    res.send('Proceeding to booking for Car: ' + carNo);
});

// Export the router object so index.js can access it
module.exports = router