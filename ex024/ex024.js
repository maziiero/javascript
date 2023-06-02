var listaFilmes = []

listaFilmes = JSON.parse(localStorage.getItem('bdFilmes'))
if (listaFilmes == null) {
    listaFilmes = []
}
console.log(listaFilmes)
exibirFilmes()

function cadastrarFilms() {
    var nomefilme = document.getElementById("nome").value
    var imagemfilme = document.getElementById("foto").value

    var filmes = {
        nome: nomefilme,
        link: imagemfilme

    }
    listaFilmes.push(filmes)
    localStorage.setItem('bdFilmes', JSON.stringify(listaFilmes))

    exibirFilmes()

}

function exibirFilmes() {
    for (var i in listaFilmes) {
        document.getElementById("lista").innerHTML += `${listaFilmes[i].nome}<br> <img src="${listaFilmes[i].link}"><br>`
    }
}

function sortear() {
    var filmalea = parseInt(math.random() * listarfilme.length)
    document.getElementById("lista").innerHTML +=
        `
        <div>
        ${listarfilme[filmalea].nome}<br>
        <img src="${listarfilme[filmalea].link}"> <br>
        </div>
        `
}
function valiarcadastro(nomefilme, imagemfilme) {
    if (nomefilme != `` && imagemfilme != ``) {
        return true
    } else {
        return false

    }
}
