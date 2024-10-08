const express = require('express')
const app = express()
const path = require('path')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(express.urlencoded({ extended: true }))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
    // res.status(404).send('<htm><h1>Page Not Found !!!!</h1></htm>')
    res.status(404).sendFile(path.join(__dirname, 'views', '404-not-found.html'))
})
app.listen(3000)
// const server = http.createServer(app);

// server.listen(3000)