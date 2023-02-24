function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 6 && hora < 18){
        //BOM DIA!
        
        document.body.style.background = '#90e0ef'
    } else{
        //BOA NOITE
        
        document.body.style.background = '#023e8a'
    }
}
