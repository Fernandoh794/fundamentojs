

 const li = document.querySelectorAll('li');


li.forEach((item) => {
    item.classList.add('item')   // Adicionar Classes com um Array
}) 


const numeros = [2,4,6,8,10];    

const n2 = numeros.map(item => item*25)   // Manipular o array com map

console.log(n2)



//* 

const produtos = [
 {
     nome: 'teclado',
     preco: 400,
 }, 
 { 
     mome: 'Webcam',
     preco: 500

 },

 {
     nome: 'Cadeira Gamer',
     preco: 1100,

 }

]

let total = 0;

produtos.map(item => total += item.preco)   // Calcular o preco do carrinho 
console.log(total)   

