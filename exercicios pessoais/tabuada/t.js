function table(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0 ){
        alert('Por favor, digite um número!')
    
    }else {
        let n = Number(num.value)
        let c = 1 
        tab.innerHTML ='' // após gerar a tabuada, limpar o conteúdo
        while(c <=10){
            let item = document.createElement('option') // criou  elemento option de forma dinamica - nummero da tabuada 
            item.text = `${n} x ${c} = ${n*c}`
            item.value =`tab${c}` // options adicionadas também precisam ter values.
            tab.appendChild(item) // adiciona o elemento criado na variavel item que mostraá nas opções 
            c++ // no while deve incrementar aqui, diferente do for que condição  logica, ação e incremento sobre i são feitos na mesma linha
        }
    }

    
}
