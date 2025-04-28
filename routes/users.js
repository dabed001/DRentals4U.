// Create a new router
const express = require("express")
const router = express.Router()

router.get('/users', function (req, res, next) {
    res.render('users.ejs')                                                               
})    

router.get('/hosts', function (req, res, next) {
    res.render('hosts.ejs')                                                               
})    
router.post('/signedin', function (req, res, next) {
    // Saving data in the database
    res.send(' Hello, You Are Now Logged Into DRentals4U! We Will Send An Email Confirming This Successful Login To ' + req.body.email)                                                                           
})

// Export the router object so index.js can access it
module.exports = router