var nr = parseInt(Math.random() * 101)
var tentativas = 0


function media(){
    var chute = prompt("Chutar um número")
    if (chute > nr){
        document.getElementById("resultados").innerHTML += `<p class="vermelho">Pensei em um número menor<br></p><br>`
    } else if (chute < nr){
        document.getElementById("resultados").innerHTML += `<p class="vermelho">Pensei em um número maior</p><br>`
    }else if (chute == nr){
        document.getElementById("resultados").innerHTML += `<p class="verde"> Você acertou! eu pensei em ${nr}</p><br>`
    }
}
function novo(){
    document.getElementById("resultados").innerHTML=""
    nr = parseInt(mat.random() * 100)
}
function NovoJogo(){
    nr = 0
    document.getElementById("ficatotó").innerHTML = " "
    p9 = parseInt(Math.random() * 100)
    console.log(p9)
}-+