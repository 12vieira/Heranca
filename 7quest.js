//Crie uma classe base Instrumento com o método tocar. Crie duas classes derivadas
//Violao e Piano, que devem implementar o método tocar exibindo sons específicos.

class Instrumento{
    constructor(nome,som){
        this.nome = nome,
        this.som = som;
    }
    tocar(){
        console.log(`O intrumento faz ${this.som}`)
    }
}
class Violao extends Instrumento{
    constructor(nome,som){
        super(nome,som);
    }
    tocar(){
        console.log(`O ${this.nome} faz ${this.som}`)
    }
}
class Piano extends Instrumento{
    constructor(nome,som){
        super(nome,som);
    }
    tocar(){
        console.log(`O ${this.nome} faz ${this.som}`)
    }
}
const guitar = new Violao('violao','blang blang');
guitar.tocar()
const teclado = new Piano('teclado','ping ping')
teclado.tocar()