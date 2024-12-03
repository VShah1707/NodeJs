const express = require('express')
const path = require('path')
const router = express.Router()
const rootDir = require('../utils/path')

router.use('/add-product', (req, res, next) => {
    console.log('In the middleware');
    // res.send(`
    //     <html>
    //       <head>
    //         <title>Add Product</title>
    //       </head>
    //       <body>
    //         <h1>Hello 123</h1>
    //         <form action="/admin/submit" method="POST">
    //           <label for="name">Name:</label>
    //           <input type="text" id="name" name="name" required>
    //           <br>
    //           <label for="email">Email:</label>
    //           <input type="email" id="email" name="email" required>
    //           <br>
    //           <button type="submit">Submit</button>
    //         </form>
    //       </body>
    //     </html>
    //   `);
    
    res.sendFile(path.join(rootDir,'views', 'add-product.html'));
    // res.sendFile(path.join(rootDir,'views', 'add-product.html'));
  });

router.post('/submit', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router