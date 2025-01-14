//Crie uma classe base chamada Animal com o método fazerSom. Depois, crie classes
//derivadas Cachorro e Gato, cada uma sobrescrevendo o método fazerSom para emitir
//sons específicos.

class Animal {
    constructor(nome){
        this.nome = nome;
    }
    fazersom(){
        console.log(`${this.nome} BARULHO`)
    }
}
class Cachorro extends Animal {
    fazersom(){
        console.log(`${this.nome} faz AU AU`);
    }
}
class Gato extends Animal {
    fazersom(){
        console.log(`${this.nome} faz MIAU`);
    }
}
const cat = new Gato("Filó");
cat.fazersom();
const dog = new Cachorro("Loki");
dog.fazersom();
