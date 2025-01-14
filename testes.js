// Classe base Funcionario
class Funcionario {
    constructor(nome,salario){[
        this.nome = nome,
        this.salario = salario
    ]}
}

// Classe derivada Gerente
class Gerente extends Funcionario{
    constructor(nome, salario, departamento){
        //this.nome = nome,
        //this.salario = salario,
        super(nome,salario);
        this.departamento = departamento
    }

    exibirInfo() {
        console.log(`Gerente ${this.nome} ganha ${this.salario} e trabalha no ${this.departamento}`)
    }
}

// Testando as classes
const gerente = new Gerente('João Silva', 5000, 'Recursos Humanos');
gerente.exibirInfo();
// Saída:
// Nome: João Silva
// Salário: R$5000
// Departamento: Recursos Humanos
