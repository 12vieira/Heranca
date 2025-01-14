//Crie uma classe base ContaBancaria com um atributo protegido _saldo e um método
//verSaldo. Crie uma classe derivada ContaCorrente que implementa métodos
//depositar e sacar, com validação para impedir saques maiores que o saldo.

class ContaBancaria {
    constructor(saldo){
        this._saldo = saldo;
    }
    verSaldo(){
        console.log(`${this._saldo}`);
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(saldo){
        super(saldo);
    }
    depositar(valor){
        const dep = valor + this._saldo;
        console.log(`Depósito de: R$ ${dep}`)
    }
    sacar(valor){
        if(valor < this._saldo){
            const sac = this._saldo - valor;
            console.log(`Saque de: R$ ${sac}`)
        }
    }
}
const conta = new ContaCorrente(7000);
conta.sacar(930);
conta.depositar(2700)