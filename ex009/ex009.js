function fechamed(){
    var T1 = document.getElementById("nome").value
    var T2 = document.getElementById("idade").value


    if (T2 >= 18){
        document.getElementById("cnh").innerHTML += `Parabéns ${T1}, você pode tirar sua CNH<br>`
        document.getElementById("cnh").innerHTML += `<img src="/cnh.jpg"<br>`
    }else{
        document.getElementById("cnh").innerHTML += `Infelizmente ${T1}, você NÃO pode tirar sua CNH ainda<br>`
        document.getElementById("cnh").innerHTML += `<img src="/cnh.jpg"<br>`
    }

}