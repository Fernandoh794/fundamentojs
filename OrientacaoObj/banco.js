class ContaBancaria {
    constructor(saldo) {
    this.saldo = saldo;
}

deposito(valor) {
    this.saldo += valor;

}

saque(valorSaque) {
    this.saldo -= valorSaque;
}


}

let conta1 = new ContaBancaria(1000);
conta1.deposito(500)
conta1.deposito(300)
console.log(conta1.saldo)
conta1.saque(800)
console.log(conta1.saldo)
