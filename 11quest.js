//Crie uma classe base chamada Veiculo com o método info que exibe o tipo de veículo.
//Em seguida, crie duas classes derivadas chamadas Carro e Moto que sobrescrevem o
//método info para incluir informações específicas do veículo, como modelo e ano.

class Veiculo {
    constructor(tipo) {
      this.tipo = tipo; 
    }
    info() {
      return `Este é um veículo do tipo ${this.tipo}.`;
    }
  }
  
  class Carro extends Veiculo {
    constructor(tipo, modelo, ano) {
      super(tipo);
      this.modelo = modelo;
      this.ano = ano;
    }
    info() {
      return `${super.info()} Modelo: ${this.modelo}, Ano: ${this.ano}.`;
    }
  }

  class Moto extends Veiculo {
    constructor(tipo, modelo, ano) {
      super(tipo); 
      this.modelo = modelo;
      this.ano = ano;
    }
  
    info() {
      return `${super.info()} Modelo: ${this.modelo}, Ano: ${this.ano}.`;
    }
  }
  
  const carro = new Carro("Carro", "Fusca", 1980);
  console.log(carro.info());
  const moto = new Moto("Moto", "Harley Davidson", 2023);
  console.log(moto.info()); 