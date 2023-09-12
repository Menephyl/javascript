// RECURSIVIDADE
function fatorial(n){
if(n == 1){
   return 1
} else {
    return n* fatorial(n-1)
}
}

/*
 forma recursiva 

 5! é a mesma coisa que 5x4x3x2x1
 5! = 5 x 4!

 n! = n x x (n-1)!
 1! = 1
*/