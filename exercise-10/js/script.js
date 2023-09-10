function verificar() {
    var nas = window.document.getElementById('nas').value
    var res = window.document.getElementById('res')
    if (nas === 'Brasil') {
        res.innerHTML = 'Bem Vindo ao Brasil!'
        res.innerHTML += `<p>Por favor vá para o balcão <strong>A1</strong><p>`
    } else {
        res.innerHTML = 'Welcome to Brazil!'
        res.innerHTML += `<p>Please go to the <strong>B2</strong> counter</p>`
    }
}