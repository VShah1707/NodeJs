const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/add-product', (req, res, next) => {
    // res.send(`
    //     <html>
    //     <h1>Add New Product</h1>
    //     <form action="/admin/add-product" method="POST">
    //         <div>
    //             <label for="productName">Product Name:</label>
    //             <input type="text" id="productName" name="productName" required>
    //         </div>
    //         <div>
    //             <label for="productPrice">Product Price:</label>
    //             <input type="number" id="productPrice" name="productPrice" required>
    //         </div>
    //         <div>
    //             <label for="productDescription">Product Description:</label>
    //             <textarea id="productDescription" name="productDescription" required></textarea>
    //         </div>
    //         <button type="submit">Add Product</button>
    //     </form>
    //     </html>
    // `);
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
});

router.post('/add-product', (req, res) => {
    console.log('Redirection', req.body)
    res.redirect('/')
})
module.exports = router