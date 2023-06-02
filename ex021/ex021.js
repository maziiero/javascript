var filmes = []

function movies(){
    document.getElementById("toporca").innerHTML = ''
    var nomefilme = document.getElementById ("nomefilme").value
    filmes.push (nomefilme)
    for (var i = 0; i < filmes.length; i++){
        document.getElementById("toporca").innerHTML += `${i} - ${filmes[i]}<br>`
    }}
