function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var date = new Date()
    var hora = date.getHours()
    msg.innerHTML = `Agora são ${hora} horas.` 
    
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = "Imagens/manha.png"
        document.body.style.background = '#FFA500'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = "Imagens/tarde.png"
        document.body.style.background = '#FF8C00'
    } else {
        // BOA NOITE
        img.src = "Imagens/noite.png"
        document.body.style.background = '#191970'
    }
}
