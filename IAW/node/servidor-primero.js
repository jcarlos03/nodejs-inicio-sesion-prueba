// Atraer una libreria / Importar el módulo HTTP
const http = require('http');

// Crear el servidor
const server = http.createServer((req,res) => {
    //codigo del servidor va aquí
    //Indicamos el tipo de contenido que vamos a enviar en la cabecera
    res.writeHead(200, {'Content-Type':'text/html'});
    
    //Pruebas HTML
    res.write('<html><head><title>Mi Primer Servidor</title></head><body><h1>Hola desde mi primer servidor Node.js</h1><body></html>');
    res.end('');
    // Lo último que se envía
    // res.end('Hola desde Node.js');
});

// Definir el puerto de la comunicación, tras hacer el node (nombre del archivo). localhost:3000 y sale el contenido
server.listen(3000,() => {console.log('Servidor escuchando en el puerto 3000'); });