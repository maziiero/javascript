function media(){
    var nr = document.getElementById("nr").value
    nr = parseInt(nr);

    for (var contador = 1; contador<=10; contador++){
        var mult = contador * nr
        document.getElementById("resultado").innerHTML += `${nr} x ${contador} = ${mult} <br>`
    }
}
