
function media(){
    var nome = document.getElementById("nome").value
    var foto = document.getElementById("foto").value
    var filmes = []
    var img = []

        filmes.push(nome)
        for (var i = 0; i < filmes.length; i++){
        document.getElementById("resultados").innerHTML += `${filmes[i]}<br>`
       
    }
    img.push(foto)
    for (var i = 0; i < img.length; i++){
    document.getElementById("resultados").innerHTML += `<img src="${img[i]}"<br>`
}
}