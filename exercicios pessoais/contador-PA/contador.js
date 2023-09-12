function contar(){
let ini = document.getElementById(`txti`)
let fim = document.getElementById(`txtf`)
let passo = document.getElementById('txtp') // quando desejar, pesquisar sobre o query selector
let res = document.getElementById(`res`)

if( ini.value.length == 0 || fim.value.length == 0 || passo.valuelength == 0  ){  // how many letters have insideP
    alert(`[ERRO] FALTAM DAODS!`)
    res.innerHTML =`ERROU, TENTE DE NOVO!`
} else {
    res.innerHTML=`Contando...`
    let i = Number(ini.value) // Necessario colocar para converter devido que nao e convertido para number automaticmente, pegar o valor dentro de ini e deve-se converter nesse caso
    let f = Number(fim.value)
    let p = Number(passo.value)
    if(p <=0 ){
        alert(`PASSO INVALIDO`)
    }
  // contar do inicio ao fim somamando o passo e nesse caso usar o for 
    if( i < f ){
        // contagem crescente
        for(let c = i; c <= f; c += p ){  // para contador recebe valor inicial , contagem crescente enquanto i  for menor ou igual a f, deve-se atribuir mais um em c envolvendo o p 
            res.innerHTML += `${c} \u{1F449} `
        }
        res.innerHTML += `\u{1F3C1}`
    }else {
        for(let c = i; c >= f; c -= p ){  // para contador recebe valor inicial , contagem decrescente enquanto i  for maior ou igual a f, deve-se decrementar um em c envolvendo o p 
            res.innerHTML += `${c} \u{1F449} `
        }
        res.innerHTML += `\u{1F3C1}`
    }
}

}