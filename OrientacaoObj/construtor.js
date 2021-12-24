function criaCachorro(raca, patas, cor) {
    let cachorro = Object.create({})
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    return cachorro;
}

let viraLata = criaCachorro('Vira lata', 4, 'Preto')
console.log(viraLata)