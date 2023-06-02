function Calculadora(){
    var y1 = document.getElementById("valor1").value
    var y2 = document.getElementById("valor2").value

   
    y1 = Number(y1)
    y2 = Number(y2)


    var mais = y1 + y2
    var menos = y1 - y2
    var vezes = y1 * y2
    var divide = y1 / y2
    var resto = y1 % y2
    var expoente = y1 ** y2

    document.getElementById("respostas").innerHTML += `${y1} + ${y2} = ${mais}<br>`
    document.getElementById("respostas").innerHTML += `${y1} - ${y2} = ${menos}<br>`
    document.getElementById("respostas").innerHTML += `${y1} * ${y2} = ${vezes}<br>`
    document.getElementById("respostas").innerHTML += `${y1} / ${y2} = ${divide}<br>`
    document.getElementById("respostas").innerHTML += `${y1} % ${y2} = ${resto}<br>`
    document.getElementById("respostas").innerHTML += `${y1} ** ${y2} = ${expoente}<br>`
}
