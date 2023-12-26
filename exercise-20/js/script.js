function search() {
    var num = parseFloat(document.getElementById('number-input').value);
  
    if (isNaN(num) || num === "") {
        window.alert('[ERRO 01] Number empty, please enter with number')
    } else {
        for (let i = 0; i <= 10; i++) {
            document.querySelector(`.res${i}`).innerHTML = `${i} x ${num} = ${i * num}`;
          }
    }
}
function refresh() {
    location.reload();
}