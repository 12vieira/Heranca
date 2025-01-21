//Crie uma classe base Veiculo, uma classe intermediária Terrestre e uma classe
//derivada Carro. A classe Carro deve herdar atributos e métodos de Veiculo e
//Terrestre.

class Veiculo {
    constructor(modelo, ano) {
      this.modelo = modelo;
      this.ano = ano;
    }
  
    exibirInfo() {
      return `Veículo: ${this.modelo}, ${this.ano}`;
    }
  }
  
  class Terrestre extends Veiculo {
    constructor(modelo, ano) {
      super(modelo, ano); 
    }
  
    exibirInfoTerrestre() {
      return `${this.exibirInfo()}`;
    }
  }

  class Carro extends Terrestre {
    constructor(modelo, ano) {
      super(modelo, ano); 
    }
  
    exibirInfoCarro() {
      return `${this.exibirInfoTerrestre()}`;
    }
  }
  
  const carro = new Carro("Toyota", 2025);
  console.log(carro.exibirInfoCarro());
  