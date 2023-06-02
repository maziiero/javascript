listaLogin = JSON.parse(localStorage.getItem('bdlogin'))
console.log(listaLogin);

function logar(){
    var usuario = document.getElementById("user").value;
    var marcos = document.getElementById("senha").value;

    var cadastrouMona = {
        pessanha: usuario,
        picanha: marcos
    };
    var valido = false;
    for (var i = 0; i < listaLogin.length; i++){
       if (cadastrouMona.pessanha == listaLogin[i].user && cadastrouMona.picanha == listaLogin[i].pass){
        valido = true
       }
    }
    if (valido) {
        document.getElementById("lista").innerHTML = `login valido!`;
    }else {
        document.getElementById("lista").innerHTML = `login invalido!`;
    }
}
