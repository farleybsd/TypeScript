class moto {
    public velocidade : number = 0;

    constructor(public nome:string){

    }

    buzinar(){
        console.log('Toooot!')
    }

    acelerar(delta:number){
        this.velocidade = this.velocidade + delta;
    }
}

const motos = new moto('Ducati')
motos.buzinar();
console.log(motos.velocidade)
motos.acelerar(30)
console.log(motos.velocidade)

abstract class Objeto2D {
    

    constructor(public base : number = 0,
                public altura : number = 0){}

    abstract area():number;
}

class Retangulo extends Objeto2D{

    area(): number {
       return this.base * this.altura;
    }

}

const retangulo = new Retangulo(5,7);
retangulo.base = 5;
retangulo.altura = 7;

class Estagiario{

    private _primeiroNome: string = '';

    get primeiroNome(){

        return this._primeiroNome
    }

    set primeiroNome(valor){

        if(valor.length >=3)
            this._primeiroNome = valor
        else
            this._primeiroNome=''
    }
}

const estagiario = new Estagiario();
estagiario.primeiroNome ='Far'
console.log(estagiario.primeiroNome)