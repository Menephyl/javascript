function carregar() {
    var msg = window.document.getElementById('msg')
    var img=window.document.getElementById('imagem')
    var data = new Date()
   var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
  

if(hora >=0 && hora < 12){
   img.src='dia2.png'
    //BOM DIA!
    document.body.background='green'
}else if(hora >=12 && hora <=18){
    //BOA TARDE!
    img.src='tarde2.png'
document.body.style.background='brown'
}else {
    //BOA NOITE!
img.src='noite2.png'
document.body.style.background= 'black'
}
// https://pt.stackoverflow.com/questions/494834/como-trocar-cores-de-forma-din%c3%a2mica-com-javascript-e-css-puro
}
