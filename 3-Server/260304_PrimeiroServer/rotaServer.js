//Modulos
const http = require('http')
var url = require('url')

//Função callback
var callback = function(request, response){
    response.writeHeader(
        200,
        {"Content-Type": "text/plain"}
    )

    var parts = url.parse(request.url)

    if (parts.path == "/"){
        response.end("Site principal -> arquivo index.html")
    }
    else if (parts.path == "/roda1"){
        response.end("Rota 1...")
    }
    else if (parts.path == "/roda2"){
        response.end("Rota 2...")
    }
    else{
        response.end("ERRO 404: " + parts.path)
    }
}

//Cria server http
var server = http.createServer(callback)

//Server
server.listen(3000)
console.log("Server rodando em: http://localhost:3000")