const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url);

    if(request.url == '/') {
        response.write('<h1>Welcome to the Server</h1>');
        return response.end();
    }

    if(request.url == '/about') {
        response.write('<h1>About the server</h1>');
        return response.end();
    }

    response.write('Not Found');
    response.end();
});

server.listen(3000);


console.log('Servidor escuchando en el puerto 3000');