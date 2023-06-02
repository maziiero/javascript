function Sorteio(){
    var Ç1 = document.getElementById("nome").value
    var month = parseInt(Math.random() * 20)
    switch(month){
        case 1:
            document.getElementById("pataquipataqualá").innerHTML = `${Ç1}, você irá se casar em Janeiro`
            break
        case 2:
            document.getElementById("pataquipataqualá").innerHTML = `${Ç1}, você irá se casar em Fevereiro`
            break
        case 3:
            document.getElementById("pataquipataqualá").innerHTML = `${Ç1}, você irá se casar em Março`
            break
        case 4:
            document.getElementById("pataquipataqualá").innerHTML = `${Ç1}, você irá se casar em Abril`
            break
        case 5:
            document.getElementById("pataquipataqualá").innerHTML = `${Ç1}, você irá se casar em Maio`
            break
        case 6:
            document.getElementById("pataquipataqualá").innerHTML = `${Ç1}, você irá se casar em Junho`
            break
        case 7:
            document.getElementById("pataquipataqualá").innerHTML = `${Ç1}, você irá se casar em Julho`
            break
        case 8:
            document.getElementById("pataquipataqualá").innerHTML = `${Ç1}, você irá se casar em Agosto`
            break
        case 9:
            document.getElementById("pataquipataqualá").innerHTML = `${Ç1}, você irá se casar em Setembro`
            break
        case 10:
            document.getElementById("pataquipataqualá").innerHTML = `${Ç1}, você irá se casar em Outubro`
            break
        case 11:
            document.getElementById("pataquipataqualá").innerHTML = `${Ç1}, você irá se casar em Novembro`
            break
        case 12:
            document.getElementById("pataquipataqualá").innerHTML = `${Ç1}, você irá se casar em Dezembro`
            break
        default:
            document.getElementById("pataquipataqualá").innerHTML = `Quem disse que você irá se casar?`
    }
}