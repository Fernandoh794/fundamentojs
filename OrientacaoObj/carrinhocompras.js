class Carrinho {
    constructor(itens, qtd, valorTotal) {
        this.itens = itens;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    }
   addItem(Item){
    for (let itemCarrinho in this.itens) {
        if (this.itens[itemCarrinho].id == Item.id) {
            this.itens[itemCarrinho].qtd += Item.qtd;
        }
    }

   }




}

let carrinho = new Carrinho;([
    {
        id: 01,
        nome: "camisa",
        qtd: 1,
        preco: 20

    },
    {
        id: 02,
        nome: "calca",
        qtd: 2,
        preco: 80

    }
], 3 , 120)