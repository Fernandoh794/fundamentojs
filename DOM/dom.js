const menu = document.querySelector('.menu')

console.log(menu.classList) // Retorna um array com as classes
console.log(menu.className) // Retorna uma String com as classs

menu.classList.add('teste', 'lista') // adiciona uma Classe
menu.classList.remove('lista') // remove a classe
menu.classList.replace('teste', 'teste') // substitui a classe
menu.classList.toggle('active') // Se nao tiver a classe, ele coloca, se tiver, retira.