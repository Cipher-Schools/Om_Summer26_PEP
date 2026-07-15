const http = require('http');

const server = http.createServer((req, res) => {

    // res.end('Response from the server');

    if (req.url === '/') {
        res.end('Home')
    } else if (req.url === '/login') {
        res.end('Login response');
    } else {
        res.end('Not found');
    }

});


server.listen(3000, () => {
    console.log('server is running');
});
