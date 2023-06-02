function movies(){
    var filmes = ['Os Vingadores','Homem de Ferro 3 ','Guardiões da Galáxia Vol. 2','Guardiões da Galáxia','O Incrível Hulk' ]
    for (var i = 0; i < filmes.length; i++){
        document.getElementById("toporca").innerHTML += `${i} - ${filmes[i]}<br>`
    }}