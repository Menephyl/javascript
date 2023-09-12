function verificar(){
   let data= new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')  // document.querySelector('div#res') 
    //if(fano.value.length == 0 || )
   if(fano.value.length == 0 || Number(fano.value) > ano ){
      window.alert('[ERRO] Verifique os dados e tente novamente!')
   }else{
      let fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ''
      let img = document.createElement('img') // crar tag img dinamicamente

      img.setAttribute('id','foto') // criou atributo id com nome foto

      if((fsex[0].checked)) { // caso pertou no masculino
         genero = 'Homem' // genero recebe homem
         if(idade >=0 && idade < 10 ){
            img.setAttribute('src','criança-h.png')
         }else if( idade < 21) {  // se nao estiver entre 0 e 10, está acima de 10.
            img.setAttribute('src','adolescente-h.png')
         }else if(idade < 50){
            img.setAttribute('src','adulto-h.png')
         }else {
            img.setAttribute('src','idoso-h2.png')
         }           
      } else if(fsex[1].checked){ // caso pertou no feminino 
         genero ='Mulher' // genero recebe mulher
         if(idade >=0 && idade < 10 ){
            img.setAttribute('src','criança-m.png')
         }else if( idade < 21) {  // se nao estiver entre 0 e 10, está acima de 10.
            img.setAttribute('src','adolescente-m.png')
         }else if(idade < 50){
            img.setAttribute('src','adulta-m.png')
         }else {
            img.setAttribute('src','idoso-m.png')
         }   
      }
      res.style.textAlign ='center'    // mexer no estilo dinamicamente
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
      res.appendChild(img)
   }
  
}

