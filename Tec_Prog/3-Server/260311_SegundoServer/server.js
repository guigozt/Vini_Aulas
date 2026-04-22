//Modulos
const http = require('http')
const url = require('url')
const fs = require('fs')

//Função para ler arquivo
function readFile(response, file, type){
    fs.readFile(file, function(err, data){
        if (err){
            console.log(err)
            response.writeHead(500, {"Content-Type": "text/plain"})
            response.end("Erro ao ler arquivo")
            return
        }
        response.writeHead(200, {"Content-Type": type})
        response.end(data)
    })
}

//Função principal
var callback = function(request, response){

    var parts = url.parse(request.url)

    //ROTA PRINCIPAL
    if(parts.pathname == "/"){
        fs.readFile("index.html", function(err, data){
            response.writeHead(200, {"Content-Type":"text/html"})
            response.end(data)
        })
    }

    //ROTA JSON
    else if(parts.pathname == "/json"){
        readFile(response, "cadastro.json", "application/json")
    }

    //ROTA HTML (gera HTML usando o JSON)
    else if(parts.pathname == "/html"){

        fs.readFile("rotaPagina.html", function(err, data){
            response.writeHead(200, {"Content-Type":"text/html"})
            response.end(data)
        })
    }

    //ROTA JPEG (simulada)
    else if(parts.pathname == "/jpeg"){
        fs.readFile("imagem/calvin_esquilo.jpg", function(err, data){
            response.writeHead(200, {"Content-Type": "image/jpeg"})
            response.end(data)
        })
    }

    //ROTA PDF (simulada)
    else if(parts.pathname == "/pdf"){
        fs.readFile("pdf/Atv.PDF", function(err, data){
            response.writeHead(200, {"Content-Type": "application/pdf"})
            response.end(data)
        })
    }

    else if(parts.pathname == "/carregaDados.js"){
        fs.readFile("carregaDados.js", function(err, data){
            if(err){
                response.writeHead(404, {"Content-Type": "text/plain"});
                response.end("Arquivo não encontrado");
                return;
            }
            response.writeHead(200, {"Content-Type": "application/javascript"});
            response.end(data);
        })
    }

    //ERRO 404
    else{
        response.writeHead(404, {"Content-Type": "text/plain"})
        response.end("ERRO 404 - Rota não encontrada")
    }
}

//Criar servidor
var server = http.createServer(callback)

//Rodar servidor
server.listen(3000)

console.log("Servidor rodando em http://localhost:3000")