const fs = require('fs');
const http = require('http');
console.log('Inicio de programa');
fs.readFile('archivo.txt','utf8',(err,data) => {
    if(err){
        console.error('Error al leer el archivo:'. err);
        return;
    }
    const server = http.createServer((req,res) => {
        //codigo del servidor va aquí
        //Indicamos el tipo de contenido que vamos a enviar en la cabecera
        res.writeHead(200, {'Content-Type':'text/html'});
        
        //Pruebas HTML
        res.write(data);
        res.end('');
        // Lo último que se envía
        // res.end('Hola desde Node.js');
    });
    server.listen(3000,() => {console.log('Servidor escuchando en el puerto 3000'); });
});

console.log('Fin del programa');