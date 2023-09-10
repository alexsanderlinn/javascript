function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO 01] Ano inválido, por favor preencha novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')

        img.setAttribute('id','foto')

        if (fsex[0].checked) {
            genero = 'Homem'
                if (idade >= 0 && idade < 10){
                    //criança
                    img.setAttribute('src','../img/boy.png')
                } else if (idade < 21){
                    //jovem
                    img.setAttribute('src','../img/teenboy.png')
                } else if (idade < 65){
                    //adulto
                    img.setAttribute('src','../img/man.png')
                } else if (idade >= 65){
                    //velho
                    img.setAttribute('src','../img/oldman.png')
                } 
        } else if (fsex[1].checked) {
            genero = 'Mulher'
                if (idade >= 0 && idade < 10){
                    //criança
                    img.setAttribute('src', '../img/girl.png')
                } else if (idade < 21){
                    //jovem
                    img.setAttribute('src','../img/teengirl.png')
                } else if (idade < 65){
                    //adulto
                    img.setAttribute('src','../img/woman.png')
                } else if (idade >= 65){
                    //velho
                    img.setAttribute('src','../img/oldwoman.png')
                } 
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}