function calcular() {
    var txtvel = window.document.querySelector('inout#txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txtvel.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`
    res.innerHTML +=`<p> Derija sempre com sinto`
}