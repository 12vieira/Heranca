//Crie uma classe base chamada Funcionario com os atributos nome e salario. Depois,
//crie uma classe derivada Gerente que adiciona o atributo departamento e um método
//para exibir todas as informações do gerente.

class Funcionario {
    constructor(nome,salario){[
        this.nome = nome,
        this.salario = salario
    ]}
}

class Gerente extends Funcionario{
    constructor(nome, salario, departamento){
        //this.nome = nome,
        //this.salario = salario,
        super(nome,salario); //chama o construtor da classe base
        this.departamento = departamento
    }
    exibirInfo() {
        console.log(`Gerente ${this.nome} ganha ${this.salario} e trabalha no ${this.departamento}`)
    }
}
const chefe = new Gerente("Carlinhos",3000, "Financeiro");
chefe.exibirInfo();