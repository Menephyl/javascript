function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById(`res`)
    if (ini.value.length == 0 || fim.value.length ==  0 || passo.value.length == 0){
    res.innerHTML =`Impossivel contar!`
    window.alert(`[ERRO] Faltam dados!`)
    } else{
        res.innerHTML =`Contando: <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo Inválido! Considerando passo 1. ')
            p = 1
        }
        if(i < f ){
            // Contagem crescente 
            for(let c = i; c <=f;c +=p){
        res.innerHTML += `${c} \u{1f449}`
        }
    } else{
        // Contagem regressiva
        for(let c = i ; c >= f; c -= p){
            res.innerHTML += `${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1f3c1}`
}
}
/*function contar(){


    let i=document.getElementById('txti')
    let f=document.getElementById('txtf')
    let p= document.getElementById('txtp')
    let res=document.getElementById('res')
    if(i.value.length == 0 || f.value.length==0 || p.value.length == 0){
        window.alert('[ERRO! Faltam dados!')
    }else{
       res.innerHTML = 'Contando:'
    }
}



/*function contar()
let i = document.getElementById('txti')
let f = document.getElementById('txtf')
let p = document.getElementById('txtp')
 
if(i.value.length==0 || f.value.length == 0 || p.value.length == 0){
    window.alert('[ERRO!] Faltam dados!')
} else{
    alert('TUDO OK!')
}
*/
