//Modulos
const http = require('http')

//Função callback
var callback = function(request, response){
    response.writeHeader(
        200,
        {"Content-Type": "text/plain"}
    )
    response.end("Server HTTP rodando")
}

//Cria server http
var server = http.createServer(callback)

//Server
server.listen(3000)
console.log("Server rodando em: http://localhost:3000")