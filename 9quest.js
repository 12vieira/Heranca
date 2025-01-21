//Crie uma classe base Conta com métodos privados simulados para manipular um saldo.
//Crie uma classe derivada ContaPremium que utiliza esses métodos para validar
//depósitos e saques.

class Conta {
      
    constructor(saldoInicial = 0) {
      this.saldoInicial = saldoInicial;
    }
  
    consultarSaldo() {
      return `Saldo atual: R$ ${this.saldoInicial}`;
    }
  
    deposito(valor) {
      this.saldoInicial += valor;
    }
  
    saque(valor) {
      this.saldoInicial -= valor;
    }
  }
  

  class ContaPremium extends Conta {
    deposito(valor) {
      this.saldoInicial += valor;
    }
  
    saque(valor) {
      this.saldoInicial -= valor;
    }
  }
  
  const conta1 = new Conta(500);
  console.log(conta1.consultarSaldo()); 
  conta1.deposito(200);
  console.log(conta1.consultarSaldo());
  conta1.saque(100);
  console.log(conta1.consultarSaldo());
  
  const contaPremium = new ContaPremium(3000);
  console.log(contaPremium.consultarSaldo()); 
  contaPremium.deposito(1500); 
  console.log(contaPremium.consultarSaldo()); 
  contaPremium.saque(4500); // Saque válido
  console.log(contaPremium.consultarSaldo()); 
  