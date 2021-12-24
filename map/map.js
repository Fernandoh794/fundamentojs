const produtos = [
    {
        nome: "Telefone",
        preco: 1000


    },
    {
        nome: "Notebook",
        preco: 1500

    }
]

const Precoemreal = produtos.map(p => p.preco *5.75)
console.log(Precoemreal)