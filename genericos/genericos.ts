import { type } from "os"

function echo(objeto: any) {
    return objeto
}

console.log(echo('Joao'))
console.log(echo(27))
console.log(echo({ nome: 'Joao', idade: 27 }))

// Usando Generics

function echoMelhorado<T>(objeto: T): T {
    return objeto
}

console.log(echoMelhorado('Joao').length)
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({ nome: 'Joao', idade: 27 }))

// Generics disponivel na Api
const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
//avaliacoes.push('5.5')
console.log(avaliacoes)
//Array cria a funcao generica mais na hora de chamar tem que tipar
function imprimir<T>(args: T[]) {
    args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3]) //hiferencia
imprimir<number>([1, 2, 3]) // tipando para number
imprimir<string>(['Ana', 'Bia', 'Carlos']) // tipando para STRING
imprimir<{ nome: string, idade: number }>(
    [
        { nome: 'Fulando', idade: 22 },
        { nome: 'Fulando1', idade: 22 },
        { nome: 'Fulando2', idade: 22 }
    ]

)

type Aluno = { nome: string, idade: number }
imprimir<Aluno>(
    [
        { nome: 'Fulando', idade: 22 },
        { nome: 'Fulando1', idade: 22 },
        { nome: 'Fulando2', idade: 22 }
    ])

// Tipo Generico
type ECHo = <T>(data: T) => T
const chamarEcho: ECHo = echoMelhorado
console.log(chamarEcho<string>('Alguma coisa'))

//Class com Generics
abstract class OperacaoBinaria<T, R>{ // Dois tipos de genericos

    constructor(public operando1: T,
        public operando2: T) { }

    abstract execultar(): R
}

class SomaBinaria extends OperacaoBinaria<number, number>{

    execultar(): number {
        return this.operando1 + this.operando2
    }

}

console.log(new SomaBinaria(3, 7).execultar())

// console.log(new OperacaoBinaria('Bom','dia').execultar())
// console.log(new OperacaoBinaria(3,7).execultar())
// console.log(new OperacaoBinaria(3,'Bom').execultar())
// console.log(new OperacaoBinaria({},{}).execultar())

class DiferencaEntreDatas extends OperacaoBinaria<Data, string>{

    execultar(): string {

        const t1 = this.getTime(this.operando1)
        const t2 = this.getTime(this.operando2)
        const diferenca = Math.abs(t1 - t2)

        const dia = 1000 * 60 * 60 * 24

        return `${Math.ceil(diferenca / dia)} dia(s)`
    }

    getTime(data: Data): number {

        let { dia, mes, ano } = data
        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }

}

const d1 = new Data(1, 2, 2020)
const d2 = new Data(5, 2, 2020)
console.log(new DiferencaEntreDatas(d1, d2).execultar())

//Desafio Classe Fila
//Atributo: Fila Array
//Metodos: entrar,proximo,imprimir

class Fila<T extends number | string>{
    private fila: Array<T>

    constructor(...args: T[]) {
        this.fila = args
    }

    entrar(elemento: T) {
        this.fila.push(elemento)
    }

    proximo(): T | null {
        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0]
            this.fila.splice(0, 1)
            return primeiro
        } else {
            return null
        }

    }

    imprimir() {
        console.log(this.fila)
    }
}

const fila = new Fila<string>('Gui', 'Pedro', 'Lu')
fila.imprimir()
fila.entrar('Rafael')
fila.imprimir()
console.log(fila.proximo())
console.log(fila.proximo())
console.log(fila.proximo())

const novaFila= new Fila<number>(1,2,3)
novaFila.imprimir()

const outraFila= new Fila<boolean>(true,true,false)

// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()
 
type Par<C,V> = {chave:C,valor:V}

class Mapa<C,V>{
    itens: Array<Par<C,V>> = new Array<Par<C,V>>()

    obter(chave:C):Par<C,V> | null {
        const resultdo = this.itens.filter(i => i.chave ===chave)
        return resultdo ? resultdo[0] : null
    }

    colocar(par :Par<C,V>){
        const encontrado = this.obter(par.chave)
        if(encontrado){
            encontrado.valor = par.valor
        } else{
            this.itens.push(par)
        }
    }

    limpar(){
        this.itens = new Array<Par<C,V>>()
    }

    imprimir(){
        console.log(this.itens)
    }
}

const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()

//https://www.typescriptlang.org/docs/handbook/generics.html