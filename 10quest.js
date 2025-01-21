//Crie uma classe base Funcionario com um método calcularSalario. Crie classes
//derivadas Estagiario e Gerente, onde cada uma implementa a lógica de cálculo do
//salário de forma distinta

class Funcionario {
    constructor(nome, salarioBase) {
      this.nome = nome;
      this.salarioBase = salarioBase;
    }
    calcularSalario() {
      return this.salarioBase;
    }
  }
  
  class Estagiario extends Funcionario {
    constructor(nome, salarioBase, horasExtras) {
      super(nome, salarioBase);
      this.horasExtras = horasExtras;
    }
    calcularSalario() {
      return this.salarioBase + this.horasExtras * 15; 
    }
  }
  
  class Gerente extends Funcionario {
    constructor(nome, salarioBase, horasExtras) {
        super(nome, salarioBase);
        this.horasExtras = horasExtras;
    }
  
    calcularSalario() {
        return this.salarioBase + this.horasExtras * 25; 
    }
  }
  
  const estagiario = new Estagiario("João", 1500, 20);
  console.log(`${estagiario.nome} - Salário: R$ ${estagiario.calcularSalario()}`);
  
  const gerente = new Gerente("Maria", 5000, 20);
  console.log(`${gerente.nome} - Salário: R$ ${gerente.calcularSalario()}`);
  