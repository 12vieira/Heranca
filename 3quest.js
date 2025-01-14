//Crie uma classe base FormaGeometrica com um método calcularArea. As classes
//derivadas Retangulo e Circulo devem implementar o cálculo da área com suas
//fórmulas específicas.

class FormaGeometrica {
    constructor(base =0,altura=0,raio=0){
        this.base = base,
        this.altura = altura,
        this.raio = raio;
    }
    calcularArea(){
        console.log("area é: ")
    }
}
class Retangulo extends FormaGeometrica{
    constructor(base,altura){
        super(base,altura)
    }
    calcularArea(){
        const area = this.base * this.altura;
        console.log(`A área é: ${area}`);
    }
}
class Circulo extends FormaGeometrica{
    constructor(raio){
        super(0,0,raio);
    }
    calcularArea(){
        const area = this.raio * this.raio * 3.1415;
        console.log(`A área é: ${area}`);
    }
}
const ret = new Retangulo(5,10);
ret.calcularArea();
const cir = new Circulo(10);
cir.calcularArea();
