function loginlogao(){
    var D1 = document.getElementById("nome").value
    var D2 = document.getElementById("senha").value

    if (D1  == "adm" && D2 == 123){
        document.getElementById("yesorno").innerHTML = `Bem vindo! Você está logado`
    }else{
        document.getElementById("yesorno").innerHTML = `Usuário ou senha inválidos`
    }

}