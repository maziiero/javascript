var listacarros = []

//declarando um objeto
var carro = {
    ano:`2020`,
    modelo:`gol`,
    marca: `Vw`
}
//para exibir o atributo do objeto faço da seguinte forma
//objeto.atributo
console.log (carro.ano + `-` + carro.modelo)
console.log (`$ {carro.ano} - ${carro.modelo}`)

//adicionando o objeto carro ao vetor listacarros
listacarros.push(carro)

console.log(listacarros.length) //1- só existe 1 item

//novo objeto
carro = {
    ano:`2020`,
    modelo:`Onix`,
    marca: `GM`
}
//adicionando novo objeto carro ao vetor listacarros
listacarros.push(carro)
console.log(listacarros)
//exibindo uma lista apenas com o modelo do carro
for(var pos in listacarros){
    console.log(listacarros)
}
//acessando o indice do vetor e o atributo modelo
for (var pos in listacarros){
    console.log (listacarros[pos].modelo)
}