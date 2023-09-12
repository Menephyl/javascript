var agora = new Date()
var hora =agora.getHours()
console.log('BORA UM SEXO SELVAGEM?')
if(hora < 12){
    console.log(`Bom dia! Agora são ${hora} AM`)
} else if(hora<=18){
    console.log(`Boa tarde! Agora são ${hora} PM`)
}else{
    console.log(`Boa noite! Agora são ${hora} PM`)
}