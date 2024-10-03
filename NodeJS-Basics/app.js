const http = require('http');
const fs = require('fs');
const  routes  = require('./routes');
// function reqListner(req, res) {

// }

// http.createServer(reqListner);
// const server = http.createServer((req, res) => {
const server = http.createServer(routes)
    // routes(req, res)
    // console.log(req);
    // console.log('url =========', req.url, 'headers =========', req.headers, 'method =========', req.method);
    // process.exit()  to exit the process 
    // const url = req.url;
    // const method = req.method
    // if (url === '/') {
    //     res.setHeader('Content-Type', 'text/html');
    //     res.write('<html>');
    //     res.write('<head><title>Simple Form</title></head>');
    //     res.write('<body>');
    //     res.write('<h1>Hello!!!!</h1>');
    //     res.write('<form action="/submit" method="POST">');
    //     res.write('<label for="name">Name:</label>');
    //     res.write('<input type="text" id="name" name="name" required>');
    //     res.write('<button type="submit">Submit</button>');
    //     res.write('</form>');
    //     res.write('</body>');
    //     res.write('</html>');
    //     return res.end();
    // }

    // if (url === '/submit' && method === 'POST') {
    //     const body = []
    //     req.on('data', (chunk) => {
    //         console.log(chunk)
    //         body.push(chunk)
    //     })
    //     return req.on('end', () => {
    //         const parseBody = Buffer.concat(body).toString();
    //         const name = decodeURIComponent(parseBody.split('=')[1].replace(/\+/g, ' '));
    //         console.log(name);
    //         // fs.writeFileSync('message.text', name)
    //         fs.writeFile('message.text', name, (err) => {
    //             res.statusCode = 302;
    //             res.setHeader('Location', '/')
    //             return res.end()
    //         })
    //         // res.statusCode = 302;
    //         // res.setHeader('Location', '/')
    //         // return res.end()
    //     })
    // }
    // // process.exit()
    // res.setHeader('Content-Type', 'text/html')
    // res.write('<html>')
    // res.write('<head><title>Varshil</title></head>')
    // res.write('<body><h1>Good Bye!!!</h1></body>')
    // res.write('</html>')
    // res.end()

// });

server.listen(3000)