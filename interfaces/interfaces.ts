interface Humano {
    nome: string
    idade?: number
    [prop: string]: any  //generico propiedade
    saudar(sobrenome: string): void
}


function saudarComOla(pessoa: Humano) {
    console.log('Olà' + pessoa.nome)
}

function mudarNome(pessoa: { nome: string }) {
    pessoa.nome = 'Joana'
}

const pessoa: Humano = {
    nome: 'Joao',
    idade: 27,
    saudar(sobrenome: string): void {
        throw new Error("Function not implemented.")
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
//saudarComOla({nome:'aaa',idade:23,zyz:true})
pessoa.saudar('SkyWalker')

//usando Classee....

class Cliente implements Humano {

    nome: string = ''

    ultimaCompra: Date = new Date

    saudar(sobrenome: string): void {
        console.log('Ola meu nome e' + this.nome + sobrenome)
    }

}

const meuCliente = new Cliente();
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra)

// Interface Funcao

interface FuncaoCalculo {

    (a: number, b: number): number
}

let potencia: FuncaoCalculo


potencia = function (base: number, exp: number): number {
    return Array(exp).fill(base).reduce((t, a) => t * a)
}

//Heranca
interface A {
    a(): void
}

interface B {
    b(): void
}

interface Abc extends A, B {
    c(): void
}

class RealA implements A {

    a(): void {
        throw new Error("Method not implemented.")
    }

}

class RealAB implements A, B {

    a(): void {
        throw new Error("Method not implemented.")
    }
    b(): void {
        throw new Error("Method not implemented.")
    }

}

class RealABC implements Abc {
    c(): void {
        throw new Error("Method not implemented.")
    }
    a(): void {
        throw new Error("Method not implemented.")
    }
    b(): void {
        throw new Error("Method not implemented.")
    }

}

function testes(b: B) {

}

testes(new RealABC)

abstract class AbstrataABD implements A, B {
    a(): void {
        throw new Error("Method not implemented.")
    }
    b(): void {
        throw new Error("Method not implemented.")
    }
    abstract d(): void
}

// Object.prototype.log = function(){
//     console.log(this.toString())
// }

interface Object {
    log() : void
}

const x1 =2
const y1 =3
const z1 =4

x1.log()
y1.log()
z1.log()

const cli ={
    nome:'Pedro',
    toString() {
        return this.nome 
    }
}