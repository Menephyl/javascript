function tabuada(){
   let num = document.getElementById(`txtn`)
   let tab= document.getElementById(`seltab`) 
   if(num.value.length == 0){
    window.alert(`Por favor, digite um numero!`)
   } else{
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = '' // antes de começar a rodar a proxima opção na tabuada. o conteudo ficará limpo
    while(c <= 10){
      let item = document.createElement(`option`)  // criar dinamicamente opcao selecionavel 
      item.text = `${n} x ${c} = ${n*c}`
      item.value =`tab${c}` // demonstra item selecionado na caixa de seleção e opções
      tab.appendChild(item) //em variavel tab para armazenar valor da tabela, adicionar valor dinamicamente 
      c++ // incrementar valor de c
    }
   }
}