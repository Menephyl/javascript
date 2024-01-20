
// Função para mudar o conteúdo de t2
function modifyText() {
  var t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = "three";
}

// Função para adicionar uma espera de evento em t
function load() {
  var el = document.getElementById("t");
  el.addEventListener("click", modifyText, false);
}

document.addEventListener("DOMContentLoaded", load, false);