const carros = ['Uno', 'Gol', 'Punto', 'Siena']
const marcas = ['VW', 'Fiat', 'Renault', 'Audi']


carros.forEach(function(item){  // Retornar os Itens do Array  // Primeiro argumento é o item, segundo o Index, terceiro o Array
    console.log(item);
}) 


carros.forEach((arrow)=> { console.log(arrow) }) // com Arrow Function


const carroseMarcas = marcas.map((item, index) => {
return marcas + ':' + carros[index]

})

console.log(carroseMarcas)


carroseMarcas.forEach((item)=> console.log(item)) ;