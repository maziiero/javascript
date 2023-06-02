
//declarando uma função sem parametro e sem retorno 
function exibirinformacao(){
    console.log (`execultei a função exibir info`)
}

//chamando a minha função
exibirinformacao()
exibirinformacao()

function ricardoCalculeTabuada(nr){
    for (var i=1; i<=20; i++){
        console.log (`${nr} x ${i} = ${nr * i}`)
    }
}
//chamando a função(9)
function ricardodobro(nr){
    let dobro = nr * 2
    return dobro
}
var resultado = ricardodobro(7)
console.log (resultado)
