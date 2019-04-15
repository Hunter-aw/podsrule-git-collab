const express = require('express')
const request = require('request')
const router = express.Router()


router.get('/sanity', function (req, res) {
    res.send(`Let's have some fun`)
})


module.exports = router