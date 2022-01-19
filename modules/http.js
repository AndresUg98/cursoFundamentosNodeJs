const http = require('http');

http.createServer(function (req, res) {
    console.log('nueva peticion');
    console.log(req.url);

    res.writeHead(201, {'content-Type': 'text/plain'});

    //Escribir respuesta al usuario
    res.write('Hola ya se usar http de nodeJs');
    
    res.end();
}).listen(3000);


console.log("Escuchando http en el puerto 3000");