const express = require('express')
const app = express()
const path = require('path')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const rootPath = require('./utils/path')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminRoutes)  // Here we set the /admin common route
app.use(shopRoutes)

app.use((req, res, next) => {
    // res.status(404).send('<htm><h1>Page Not Found !!!!</h1></htm>')
    res.status(404).sendFile(path.join(rootPath, 'views', '404-not-found.html'))
})
app.listen(3000)
// const server = http.createServer(app);

// server.listen(3000)