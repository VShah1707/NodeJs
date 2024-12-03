const express = require('express')
const path = require('path')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const bodyParser = require('body-parser')

const app = express();

// app.use((req, res, next) => {
//     console.log('In the middleware')
//     next(); // Allow the request to continue to the next middleware
// })

app.use(bodyParser.urlencoded())
app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use('/', (req, res, next) => {
    // res.status(404).send('<h1>Page Not Found</h1>')
    res.status(404).sendfile(path.join(__dirname, 'views', 'PageNotFound.html'))
})


app.listen(3000)