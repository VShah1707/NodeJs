const express = require('express')
const path = require('path')
const router = express.Router()
const rootDir = require('../utils/path')

router.get('/',(req, res, next) => {
    console.log('In another middleware')
    // res.send('Hello World')
    res.sendFile(path.join(rootDir,'views','shop.html'))
    // res.sendFile(path.join(__dirname,'../','views','shop.html'))
})

module.exports = router