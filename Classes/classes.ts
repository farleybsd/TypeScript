class Data {
    //Publicos por padrao
    dia: number
    mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}


const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)


class DataEsperta {

    constructor(
        //Nao precisa declarar no corpo da classe pra usar o This
        public dia: number = 1,
        public mes: number = 1,
        public ano: number = 1970) {

    }
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991)
aniversarioEsperto.dia = 4
console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto)


class Produto {

    constructor(public nome: string,
        public preco: number,
        public desconto: number = 0
    ) { }

    precoComDesconto(): number {
        return this.preco * (1 - this.desconto)
    }

    public resumo(): string {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100})% off`
    }
}

const prod1 = new Produto('Caneta Bic Preta', 4.20)
prod1.desconto = 0.06
console.log(prod1.resumo())

const prod2 = new Produto('Caderno Escolar', 18.80, 0.15)

class Carro {

    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velicidadeMaxima: number = 200
    ) { }

    protected alterarVelocidade(delta: number): number { //protected visivel para quem herdaS

        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velicidadeMaxima

        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velicidadeMaxima : 0
        }

        return this.velocidadeAtual;
    }

    public acelerar(): number {
        return this.alterarVelocidade(5);
    }

    public frear(): number {
        return this.alterarVelocidade(-5);
    }
}

const carro1 = new Carro('Ford', 'Ka', 185);

Array(50).fill(0).forEach(() => console.log(carro1.acelerar()))
console.log(carro1.acelerar())

Array(20).fill(0).forEach(() => console.log(carro1.frear()))
console.log(carro1.frear())

// heranca

class Ferrari extends Carro {

    constructor(modelo: string,
        velocidadeMaxina: number) {
        super('Ferrari', modelo, velocidadeMaxina)
    }

    public acelerar(): number {
        return this.alterarVelocidade(20);
    }

    public frear(): number {
        return this.alterarVelocidade(-15);
    }

}

const f40 = new Ferrari('F40', 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())

//Getters & Setters
class Pessoa {

    private _idade: number = 0;

    get idade(): number {
        return this._idade;
    }

    set idade(valor: number) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}

const pessoa1 = new Pessoa;
pessoa1.idade = 10 //set
console.log(pessoa1.idade) //get

//Atributos e metodos estaticos
class Matematica {

    static Pi: number = 3.1416

    static areaCirc(raio: number): number {
        return this.Pi * raio * raio
    }
}

// const m1 = new Matematica();
// m1.Pi=4.2;
// console.log(m1.areaCirc(4))

//console.log(new Matematica().areaCirc(4));
console.log(Matematica.areaCirc(4));

//Classe Abstrada classe pai istanciar os filhos igual a interface do .net

abstract class x {

    abstract y(a: number): number;

    w(b: number): void {
        console.log(b)
    }
}

abstract class Calculo {

    protected resultado: number = 0;

    abstract execultar(...numeros: number[]): void;

    getResultado(): number {
        return this.resultado;
    }
}

class Soma extends Calculo{

    execultar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t,a) => t + a);
    }
    
}

class Multiplicacao extends Calculo{

    execultar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t,a) => t * a);
    }
    
}
const c1 : Calculo = new Soma()
c1.execultar(2,3,4,5)
console.log(c1.getResultado())

const c2 : Calculo = new Multiplicacao()
c2.execultar(2,3,4,5)
console.log(c2.getResultado())

// constructor Privado Sigleton
class unico {
    private static instance: unico = new unico
    private constructor(){}

    static getInstance() : unico{
        return unico.instance
    }

    agora(){
        return new Date
    }
}

//const errado = new unico();
console.log(unico.getInstance().agora())

//somente Leitura

class Aviao{
    public readonly modelo : string;

    constructor(modelo:string,public readonly prefixo:string){

        this.modelo = modelo;
    }
}

const turbohelice = new Aviao('Tu-114','PT-ABC')
turbohelice.modelo ='DC-8';
turbohelice.prefixo ='PT-DEF'