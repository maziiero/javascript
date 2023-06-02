function botaoCalcular(){
    var nr= document.getElementById("nrDigitando").value
    var dobro = nr * 2
    var metade = nr / 2
    document.getElementById("resultados").innerHTML +=
         `* o dobro do número ${nr} é igual a ${dobro} e a metade é igual a ${metade}`
}
function botaoLimpar(){
    document.getElementById("resultados").innerHTML =""
    document.getElementById("ntrDIGITANDO").value =""
}
//operadores aritméticos e ordem de precedencia 
var opSoma = 5 + 2 //operador de soma +
console.log(opSoma) // 7
var opSubtracao = 5 - 2 //operador de subtrção -
console.log(opSubtracao) // 3
var opMultiplicacao = 5 + 2 // operador de multiplicação *
console.log(opMultiplicacao) // 10
var opDivisao = 5 / 2 //operador de divisão /
console.log(opDivisao) // 2.5
var opExponenciacao = 5 ** 2 //operador de exponenciação * *
console.log(opExponenciacao) //  25
var opResto = 5 % 2 //operador de resto da divisão %
console.log(opResto) // 1
//Ordem de precendencia
var ordemPrecedencial = 5 + 3 / 2 
close.log(ordemPrecedencial) // 6.5
var ordemPrecedencial2 = (5 + 3) / 2
console.log(ordemPrecedencial2) // 4
/*  1 ()
    2 * *
    3 *
    4 %
    5 + -

*/
//constantes - o valor não pode ser alterado depois de atribuido 
const pi = 3.14
// pi = 3 - se o valor for alterado dará erro no javasscript