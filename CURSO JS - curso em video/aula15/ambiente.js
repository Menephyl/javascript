let num= [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(10)

console.log(`A posição do numero 2 na lista é: ${pos}`)
if(pos == -1){
    console.log(`O valor não foi encontrado!`)
}else {
    console.log(`O valor está na posição ${pos}`)
}
/*if(num.indexOf('') == -1){
    console.log(` ${num.indexOf('')}, portanto o valor desejado não está na lista`)
}

/*
let valores = [8, 1, 7, 4, 2, 9]
 valores.sort()
console.log(valores)
for(let p in valores){
    console.log(`A posição ${p} tem o valor ${valores[p]}`)
}

/*for(let pos=0;pos <valores.length;pos++)
console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

let num = [5, 8,2,9,3]
num.push(1) // SEMPRE BUSCAR 
num.sort() // coloca valores em sequência 
////SEQUÊNCIA LÓGICA LINEAR DOS CÓDIGOS
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} numeros`)
console.log(`O primeiro valor do vetor é ${num[0]}`) // sempre a ordem em js inicia-se no 0 
// exibir todos os valores do array -->>>
//for(let pos=0;pos<num.length;pos++) // loop para demonstrar elementos do array
//console.log(`A posição ${pos} tem o valor ${num[pos]}`)
*/


