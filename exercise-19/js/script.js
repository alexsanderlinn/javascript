function loading() {
    var mensagem = document.getElementById('loading');
    var contagemPontos = 0;

    var intervaloCarregamento = setInterval(function() {
        contagemPontos = (contagemPontos + 1) % 4; // 4 é o número de pontos desejado.
        var pontos = Array(contagemPontos + 1).join('.');
        mensagem.innerHTML = 'Loading' + pontos;
    }, 500); // 500 milissegundos entre cada mudança.

    // Para parar o carregamento após algum tempo (por exemplo, após 5 segundos).
    setTimeout(function() {
        clearInterval(intervaloCarregamento);
        mensagem.innerHTML = 'Charging Complete!';
        // Chama função de soma
        sum()
    }, 5000); // 5000 milissegundos (5 segundos).

    // Para iniciar o carregamento.
    loading();
}

function sum() {
    var start = parseInt(document.getElementById('start-button').value);
    var end = parseInt(document.getElementById('end-button').value);
    var step = parseInt(document.getElementById('step-button').value);

    //Verificações dos números
    if (isNaN(start) || isNaN(end) || isNaN(step) || step ===0){
        res.innerHTML = `Please, enter valid numeric values and makes sure that the step is not zero.`
    }

    var current = start;
    var resultText = '';  // Inicializa resultText para uma string vazia

    while (current <= end) {
        resultText += current;

        // Adiciona uma vírgula se não for o último número
        if (current + step <= end) {
            resultText += ", ";
        }

        current = current + step;
    }

    // Resultado será mostrado
    document.getElementById('result').innerHTML = `Sum: ${resultText}`;
}


function refresh() {
    location.reload();
}