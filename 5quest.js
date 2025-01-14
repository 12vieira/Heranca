//Crie uma classe base Conversor com um método estático celsiusParaFahrenheit.
//Crie uma classe derivada ConversorAvancado que adiciona o método estático
//fahrenheitParaCelsius

class Conversor{
    constructor(temperatura){
        this.temperatura = temperatura;
    }
    celFar(){
        const far = 32 + (this.temperatura * (9/5));
        console.log(`FAR: ${far}`)
    }
}
class ConversorAvancado extends Conversor{
    constructor(temperatura){
        super(temperatura);
    }
    farCel(){
        const cel = 5*(this.temperatura - 32)/9;
        console.log(`CEL: ${cel}`);
    }
}
const temp = new ConversorAvancado(77);
temp.farCel();