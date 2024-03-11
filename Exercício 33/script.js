function adicionarQuadrado(event) {
    var area = document.getElementById('areaClicavel');
    var quadrado = document.createElement('div'); //cria uma div que será utilizada como o quadrado
    quadrado.className = 'quadrado'; //adiciona uma classe a div para que seja personalizado
    quadrado.style.left = (event.offsetX - 25) + 'px'; // Subtrai 25 para centralizar
    quadrado.style.top = (event.offsetY - 25) + 'px'; // Subtrai 25 para centralizar
    area.appendChild(quadrado); //adiciona a div ao html
}