const output = document.getElementById('output')

//Buscar dados
fetch('/json')
    .then(response => response.json())
    .then(data => {
        output.innerHTML = "<h3>Dados do Cadastro: </h3>"
        data.forEach(item => {
            output.innerHTML += `<p>Nome: ${item.nome} | Idade: ${item.idade} | Altura: ${item.altura} | País: ${item.pais} </p>`
        })

        const img = document.createElement('img')
        img.src = '/jpeg'  // <-- rota correta no servidor
        output.appendChild(img)
    })
    .catch(err => {
        output.textContent = "Erro ao buscar JSON: " + err
    })