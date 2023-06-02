function Verificarion(){
    var s1 = document.getElementById("nome").value
    var s2 = document.getElementById("idade").value

    if (s2 <= 16){
        document.getElementById("yesorno").innerHTML = `${s1}, você não pode votar`
    }else if (s2 > 70 || s2 == 17){
        document.getElementById("yesorno").innerHTML = `${s1}, você NÃO é obrigado a votar`
    }else{
        document.getElementById("yesorno").innerHTML = `${s1}, você é obrigado a votar.`
    }
}