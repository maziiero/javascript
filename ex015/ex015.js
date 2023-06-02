function media(){
    var nr= document.getElementById("nr").value
    nr = parseInt(nr);
    var contador = 1


    while (contador <=20){
        var mult = contador * nr
        document.getElementById("resultado").innerHTML += `${nr} x ${contador} = ${mult} <br>`

        contador++
    }
    console.log(`fim da execução`)
    }