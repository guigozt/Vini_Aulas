//Carrega modulos
const http = require('http')

//Criar servidor http
var server = http.createServer(function(request, response){
    response.writeHead(
        200,
        {"Content-type": "text/plain"}
    )
    response.end("Server HTTP rodando")
})

server.listen(3000)
console.log("Server rodando em: http://localhost:3000")