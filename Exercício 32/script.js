function enviar(){
    let paisSelecionado = document.getElementById('paises')
    let resposta = document.getElementById('resposta')

    resposta.innerHTML += paisSelecionado.value + "<br>";
}

function limpar(){
    let resposta = document.getElementById('resposta')
    resposta.innerText = ''
}