const pessoa = {
    nome: 'Lucas',
    idade: 26
};

console.log(pessoa.nome)
console.log(pessoa.idade)


const quadrado = {
base: 10,
altura: 20,
calculaArea: function(){
    return this.base*this.altura
}
};

console.log(quadrado.calculaArea());