function soma(n1, n2){
    return n1+n2
} 
function subtracao(n1, n2){
    return n1 - n2
}
function divisao (n1, n2){
    if (n2>0){
    return n1/n2
    }
    else{
        console.log ("Indivisível por zero!")
    }
}
function multiplicacao(n1, n2){
    return n1*n2
}

module.exports={
    soma,
    subtracao,
    divisao,
    multiplicacao
}