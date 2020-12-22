const http = require('http');




http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'Juan Pedro',
            edad: 42,
            url: req.url
        };
        res.write(JSON.stringify(salida));
        //res.write('Hola Mundo');
        res.end();

    })
    .listen(8080);


console.log('Escuchado puerto 8080');