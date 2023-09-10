function calcular() {
    var txtv = window.document.getElementById('txtvel')
    var res = window.document.getElementById('res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`
    if (vel > 60) {
        res.innerHTML += `<p style="color: red;"> Você está <strong>Multado</strong> por Excesso de velocidade</p>`
    }
    res.innerHTML += `<p>Dirija sempre com o sinto de segurança!</p>`
}