const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url == '/') {
        return res.end('Welcome to the main page server')
    }

    if(req.url == '/about') {
        // Code Blocking
        // for(let i = 0; i < 100000; i++) {
        //     console.log(Math.floor(Math.random() * i));
        // }

        return res.end('About Page');
    }

    return res.end('Not found');
})

server.listen(3000);