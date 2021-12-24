function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.cor = cor;
    this.patas = patas;
    this.uivar = function(){
        console.log("auau")
    }
}

let viraLata = new Cachorro('Vira Lata', 4, "laranja");


viraLata.uivar();
console.log(viraLata.patas, viraLata.cor, viraLata.raca);