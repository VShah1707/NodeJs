const express = require('express')
const path = require('path')
const rootRoute = require('../utils/path')
const router = express.Router()

router.get('/', (req, res, next) => {
    // res.send('<h1>Hello !!!!</h1>')
    res.sendFile(path.join(rootRoute, 'views', 'shop.html'));
    // res.sendFile(path.join(__dirname, '../','views', 'shop.html'));
})

module.exports = router