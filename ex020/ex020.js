function movies(){
    var filmes = ['interestelar','star wars ','harry potter','super mario','barbie','vingadores','titanic' ]
    for (var i = 0; i < filmes.length; i++){
        document.getElementById("toporca").innerHTML += `${i} - ${filmes[i]}<br>`
    }}