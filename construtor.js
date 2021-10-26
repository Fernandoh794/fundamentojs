class Pessoa{
    constructor (nome, idade)  {
        this.nome = nome;
        this.idade = idade;
    }

}

const pessoa1 = new Pessoa ('Carlos', 20)


console.log(pessoa1)


const pessoa2 = new Pessoa ('Laura', 35)
pessoa2.idade = 49; 

console.log(pessoa2)