function contagem() {
    var start = document.getElementById('startInput').value;
    var end = document.getElementById('endInput').value;
    var step = document.getElementById('stepInput').value;

    var res = document.getElementById('result');
    res.innerHTML = "";  // Limpa o conteúdo anterior

    // Verifica se os valores são válidos
    if (isNaN(start) || isNaN(end) || isNaN(step)) {
        res.innerHTML = "Por favor, insira números válidos.";
        return;
    }

    // Inicializa uma variável para armazenar o valor atual
    var current = start;

    //Realiza a contagem
    while (current <= end) {
        res.innerHTML += `Passo ${current}<br>`;
        current += step;
    }
}

function refresh(){
    //Atualiza a Pagina
    location.reload()
}