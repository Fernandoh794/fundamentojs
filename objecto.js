const onibus = {
    rodas: 8,
    limitePassageiros: 40,
    portas: 4
}

console.log(onibus.limitePassageiros)
console.log(onibus.portas)

delete onibus.rodas;
console.log(onibus[1])