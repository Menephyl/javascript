function tempo(){
    var msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    var data = new Date()
    let hora =  data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
if(hora >=0 && hora < 12){
    alert(' GOOOD MORNING.... ZZZZ')
    document.body.style.background ='#FAD522'
    img.src='dia.png'
} else if( hora>=12 && hora < 18 ){
    alert('BOOOOA TARDE!!')
    img.src='tarde.png'
    document.body.style.background='#FA842E'
}else{
    alert('GOOOD  NIGHT !!!')
    img.src='noite.png'
    document.body.style.background='#2A6096' // o objetivo era alterar a cor da section dinamicamente. provavelmente, a falta de conhecimento  de DOM não permite isso. 
}
}