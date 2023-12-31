// Variável no escopo global
let globalNums = [];

function enter() {
    // Atribui o valor do campo de input
    let num = document.getElementById('input-number').value;
    num = parseInt(num);

    if (isNaN(num) || num < 1 || num > 100) {
        // Solicita valor válido
        window.alert('Please, Enter with a number between 1 to 100.');
    } else {
        let selectElement = document.getElementById('number-list');
        
        // Criar uma nova opção
        let option = document.createElement('option');
        
        // Atribuir um valor à opção (pode ser o mesmo que o texto exibido)
        option.value = num;
        
        // Atribuir o texto da opção
        option.text = `Value ${num} add`;
        
        // Adicionar a opção ao select
        selectElement.add(option);

        // Adicionar o número ao array globalNums
        globalNums.push(num);
    }
}

function result(){
    // Verifica se há números antes de realizar os cálculos
    if (globalNums.length === 0){
        window.alert('No number has been entered yet.')
    }
    
    // Quantidade de números
    let quantidadeNumeros = globalNums.length;

    // Maior número
    let maiorNumero = Math.max(...globalNums);

    // Menor número
    let menorNumero = Math.min(...globalNums);

    // Soma de todos os números
    let somaNumeros = globalNums.reduce((acc, curr) => acc + curr, 0);

    // Média dos valores
    let mediaValores = somaNumeros / quantidadeNumeros;

    // Exibe os resultados
    document.getElementById('result-all').innerHTML = `Number of numbers: ${quantidadeNumeros}<br> Higher number: ${maiorNumero}<br>Smallest number: ${menorNumero}<br>Sum of all: ${somaNumeros}<br>Average values: ${mediaValores}`;
}