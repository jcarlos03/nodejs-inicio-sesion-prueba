var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/formulario.html'));
});

app.post('/formulario', function (req, res) {
    const login = req.body.login;
    const passwd = req.body.passwd;

    const correctLogin = fs.readFileSync("./usuarios.txt", 'utf8').trim();
    const correctPasswd = fs.readFileSync("./contraseñas.txt", 'utf8').trim();

    if (login === correctLogin && passwd === correctPasswd) {
        res.redirect('/exito');
    } else {
        console.error("Error, usuario y/o contraseña incorrecto");
        
        res.redirect('/fallo');
    }

    var login1 = req.body.login;
    var passwd1 = req.body.passwd;
    console.log(login1);
    console.log(passwd1);
    console.log("Login correcto:", correctLogin);
    console.log("Contraseña correcta:", correctPasswd);
});

app.get('/exito', function (req, res) {
    res.sendFile(path.join(__dirname + '/exito.html'));
});

app.get('/fallo', function (req, res) {
    res.sendFile(path.join(__dirname + '/fallo.html'));
});

app.listen(3000, function () {
    console.log("Escuchando en el puerto 3000");
});
