let frutas = [
    'maçã', 'uva', 'banana', 'laranja'
]

console.log(frutas)
console.log(frutas[0])



frutas.pop() ; //remove o ultimo item e retorna
console.log(frutas)
//[ 'maçã', 'uva', 'banana' ]

frutas.push('Mamão') ; // adiciona um item no final do array
console.log(frutas)
// [ 'maçã', 'uva', 'banana', 'Mamão' ]


// Estruturas de Repetição;

for (let i = 0; i<=4; i++) {
    console.log(i)
}
let x =0;
while(x<frutas.length) {   ///.length vai percorrer o tamanho do array
console.log(frutas[x])
x++;

}


let y =0;
do {
 console.log(y)
 y++;
} while (y<10);



