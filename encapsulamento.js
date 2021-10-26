 /** function Quadrado(base, altura) {
    this.base = base;
    this.altura = altura;
    let cor = 'blue';
}

const quadrado = new Quadrado(6, 4);
console.log(quadrado.cor)  */


function criaQuadrado(base, altura) {
    let cor = 'blue';

    return{
        base,
        altura,
        getCor: function(){
            return cor;
        }
    };
}

const quadrado = criaQuadrado(6, 5);
console.log(quadrado.getCor)
