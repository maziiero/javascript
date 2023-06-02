var listaLogin = []
listaLogin = JSON.parse(localStorage.getItem('bdlogin', listaLogin))
if(listaLogin == null)
{
    listaLogin = []
}


console.log(listaLogin);

function campos(user, pass, nome, senha1){
    if (user =="" || pass == "" || nome == "" || senha1 ==""){
        return false;
    } else {
        return true
    }
}

function confirmar(){

    document.getElementById("lista").innerHTML = "";
   
    var usuario = document.getElementById("user").value;
    var senha = document.getElementById("senha").value;
    var senha1 = document.getElementById("senha1").value;
    var name = document.getElementById("nome").value;

    //validadr atraves de uma funçao se todos os campos foram preenchidos
    var validarCampos =  campos(usuario, senha, senha1, name)
    if (validarCampos == false){
        alert('Verifique os dados');
        return;
    }
    if (senha != senha1) {
        alert('Verifique os dados');
        return;
    }

    var confirmuser = {
        user: usuario,
        pass: senha,
        nome: name
    }

    listaLogin.push(confirmuser);
    localStorage.setItem('bdlogin', JSON.stringify(listaLogin));

    exibircadastro();
}

function exibircadastro() {
    document.getElementById("lista").innerHTML = '';
    for (var i = 0; i < listaLogin.length; i++) {
        document.getElementById("lista").innerHTML += `${listaLogin[i].nome} se cadastrou como ${listaLogin[i].user}<br>`;
    }
}
function limpar(){
    document.getElementById("lista").innerHTML = "";
    listaLogin = []
    localStorage.setItem('bdlogin', JSON.stringify(listaLogin));
}