function fechamed(){
    var f1 = document.getElementById("nota1").value
    var f2 = document.getElementById("nota2").value
    var f3 = document.getElementById("nome").value

    f1 = Number(f1)
    f2 = Number(f2)

    var media = (f1 + f2) / 2

    document.getElementById("alunoenota").innerHTML += `O aluno(a) ${f3} tirou nota ${f1} e ${f2} e sua média foi ${media}<br>`
   
    var minhaNota = media
    if (minhaNota >= 7){
        document.getElementById("alunoenota").innerHTML += `APROVADO<br>`
    }else{
        document.getElementById("alunoenota").innerHTML += `REPROVADO<br>`
    }
}
