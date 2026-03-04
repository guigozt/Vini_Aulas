var http = require('http')
var url = require('url')
var fs = require('fs')

function readFile(response, file){
    fs.readFile(file, function(err, data){
        if (err) {
            response.writeHead(500, {
                "Content-Type": "application/json; charset=utf-8"
            })
            response.end(JSON.stringify({ erro: "Erro ao ler arquivo" }))
            return
        }
        response.end(data)
    })
}

var callback = function(request, response){

    var parts = url.parse(request.url)

    if (parts.pathname == "/rota1/cadastro"){
        response.writeHead(200, {
            "Content-Type": "application/json; charset=utf-8"
        })
        readFile(response, "cadastro.json")
    }
    else{
        response.writeHead(404, {
            "Content-Type": "application/json; charset=utf-8"
        })
        response.end(JSON.stringify({ erro: "Rota não encontrada" }))
    }
}

var server = http.createServer(callback)

server.listen(3000)
console.log("Servidor rodando em http://localhost:3000")