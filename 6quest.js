//Crie uma classe base Produto com os atributos nome e preco. Crie duas classes
//derivadas Eletronico e Vestuario, cada uma com um método adicional (garantia
//para eletrônicos e tamanho para vestuário).

class Produto{
    constructor(nome, preco){
        this.nome = nome,
        this.preco = preco
    }

}

class Eletronico extends Produto{
    constructor(nome, preco){
        super(nome,preco)
    }
    garantia(){
        console.log(`${this.nome} está na garantia`)
    }
}

class Vestuario extends Produto{
    constructor(nome, preco){
        super(nome,preco)
    }
    tamanho(){
        console.log(`${this.nome} tem tamanho G`)
    }
}

const camisa = new Vestuario('camisa',59.90);
camisa.tamanho();

const celular = new Eletronico('celular',1299);
celular.garantia()