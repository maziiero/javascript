function sorteio(){
    document.getElementById("poraqui").innerHTML=""
    for (var i = 0; i <= 5; i ++){
        var nr = parseInt(Math.random() * 60) + 1
            document.getElementById("poraqui").innerHTML += ` ${nr} `
    }
}