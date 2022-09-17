// string 
let nome: string = 'joao'
console.log(nome)
//number
let idade: number = 27.5
console.log(idade)
//boolean
let possuihobie = false
console.log(possuihobie)
//tipos explicitos 
const minhaidade: number = 27;
console.log(minhaidade);
//array
let hobbies: any[] = ["Cozinhar", "Praticar Esporte"]

//tuplas 
let endereco: [string, number] = ["Av.Principal", 99]
console.log(endereco)

//enum

enum Cor {
    Cinza, //0
    Verde = 100, //100
    Azul = 2  //2
}

let minhacor: Cor = Cor.Verde
console.log(minhacor)

//any
let carro: any = "BMW"

// funcoes e parametros
function retornaMeuNome(): string {
    return nome
}

console.log(retornaMeuNome());

function digaOi(): void {
    console.log("Oi")
}

digaOi();

function multiplicar(numA: number, numB: number): number {
    return numA * numB;
}

console.log(multiplicar(2, 3))

const teste = (): boolean => {
    return true
}

// tipo funcao
let calculo;
calculo = multiplicar;
calculo(2, 3);

//objetos 
let usuario: { nome: string, idade: number } = {
    nome: 'Joao',
    idade: 27
}

//Alias
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let funcionario: Funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario: number): string {
        if (horario <= 8) {
            return 'Ponto Normal'
        } else {
            return 'Fora do horario'
        }
    }
}

let funcionario2: Funcionario = {
    supervisores: ['Bia', 'Thalita'],
    baterPonto(horario: number): string {
        if (horario <= 8) {
            return 'Ponto Normal'
        } else {
            return 'Fora do horario'
        }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))

//Union Types juntando number e string
let nota: number | string = 10
console.log(`Minha nota e ${nota}`)
nota = '10'
console.log(`Minha nota e ${nota}`)

//checando Tipos
let valor = 30
if (typeof valor === "number") {
    console.log("E um munber!")
} else {
    console.log(typeof valor)
}

// Tipo Never nunca vai retornar um loop infinito ou erro

function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Sabao',
    preco: -1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa Ter Um Nome')
        }
        if (this.preco <= 0) {
            falha('Preco Invalido')
        }
    }
}

produto.validarProduto();

//Nulos
let alturaOpicional : null | number = 12;
alturaOpicional = null;

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1 : Contato = {
    nome:'Fulano',
    tel1:'123456',
    tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)