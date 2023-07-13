const http = require("http");
const app = require("./app");

const server = http.createServer(app); //Kreirali smo htpp server sa ovom komandom app nam je modul koji smo exportali gore iznad

server.listen(3000, "localhost");

console.log("Server startan");
