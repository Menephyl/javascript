//criando variaveis para os controles básicos do documento
let num = document.querySelector(`input#fnum`)
let lista = document.querySelector('select#flista')
let res= document.querySelector (`div#res`) // lista
let= valores =[] // vetor de valores inseridos na lista 

function isNumero(n){ // verificar se é um número entre 1 e 100
if(Number(n) >= 1 && Number(n) <= 100){
    return true
}else {// nao vai exibir nada, apenas verificar

    return false
}

}

function inLista(n, l){// verificar se valor está na lisa 
if(l.indexOf(Number(n))!= -1){
    return true 
}else {
    return false
}
}

function adicionar(){
    if(isNumero(num.value)&& !inLista(num.value, valores)){
        valores.push(Number(num.value)) // adiciona valor na lista 
        let item = document.createElement('option') // criado elemento de forma dinamica 
        item.text = `valor  ${num.value} adicionado `  
        lista.appendChild(item)
        res.innerHTML= '' // quando adicionar um elemento, limpa a area de resultado 
              //só irá adicionar o valor se for digitado na area fnum e nao encaixar na area de verificação do inLista
    }else{
        window.alert(`Valor inválido ou já encontrado na lista `)
    }
    num.value= '' // elimina numero digitado em fnum
    num.focus() // volta para area de digitação em fnum
}
function finalizar(){
    if(valores.length == 0) {
        window.alert(`Adicione os valores antes de finalizar! `)
    }else{
        let tot = valores.length // cria variavel tot para receber o comprimento do vetor valores e exibe portanto a quantidade de numeros
        let maior = valores[0]
        let menor = valores[0]
         let soma = 0 
        let media = 0 
        for(let pos in valores){
            soma += valores[pos] // soma valores entrados na lista
            // para cada posição in valores 
            if(valores[pos]> maior)
            maior = valores[pos] // será verificado o maior e menor valor e demonstrado na tela 
            if(valores[pos]<menor){
                menor = valores[pos]
            }
        }
        media = soma / tot // colocando a media dos valores cadatrados 
        res.innerHTML= ''
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p> `
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`

        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`

    }
}