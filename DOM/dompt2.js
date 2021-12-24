let link = document.createElement('a');   // cria o elemto
link.setAttribute('href', 'https://www.google.com')   // adiciona atributos ao elemento



let conteudo = document.createTextNode('Acessar o Google');
link.appendChild(conteudo)

let container = document.querySelector('.container');
container.appendChild(link)

link.style.color = 'red';

let box = document.querySelector('.box');  // seleciona a Div   
box.style.width = '200px';  // seta altura e largura
box.style.height = '200px';
box.style.backgroundColor = 'black';  // muda a cor do Background


let h1 = document.querySelector('h1');

h1.addEventListener('click', () => 
    console.log('Olá, to escutando')
)

function callback(event) {
    console.log(event.target)
}


container.addEventListener('click', callback)