    function carregar() {
        
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var min = new Date();
    var sec = new Date();
    var hour = data.getHours();
    var minute = min.getMinutes();
    var seconds = sec.getSeconds();


    msg.innerHTML = `Agora são ${hour} horas e ${minute} Minutos e ${seconds} Segudos`;


    if (hour >= 0 && hour < 12) {
        //BOM DIA!
        img.src = '../img/morning.png';
        document.body.style.background = '#5fa0ea9a';
    } else if (hour >= 12 && hour <= 18) {
        //BOA TARDE!
        img.src = '../img/afternoon.png';
        document.body.style.background = '#0522059d';
    } else {
        //BOA NOITE!
        img.src = '../img/night.png';
        document.body.style.background = '#0c2848cc';
    }


    setTimeout(function(){ location.reload(); }, 1000);


    }
