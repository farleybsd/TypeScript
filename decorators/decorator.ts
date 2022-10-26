import { error } from 'console';
import { type } from 'os';
function logarClasse(construtor: Function) {
    console.log(construtor)
}

function decoratorVazio(_: Function) { }

function logarClasseSe(valor: boolean) {
    return valor ? logarClasse : decoratorVazio
}

function decorator(obj: { a: string, b: number }) {
    return function (_: Function): void {
        console.log(obj.a + ' ' + obj.b)
    }
}

//interceptar Constructor
type Constructor = { new(...args: any[]): {} };

function logarObjeto(constructor: Constructor) {
    console.log('Carregado uma unica vez!!!')
    return class extends constructor {
        constructor(...args: any[]) {
            console.log('Antes...')
            super(...args)
            console.log('Depois....')
        }
    }
}

// new Eletrodomestico()
// new Eletrodomestico()
// new Eletrodomestico()

// Decorator e uma funcao
//@logarClasse
//@logarClasseSe(true)
//@decorator({a:'Teste',b:123})
//@logarObjeto
@imprimivel
class Eletrodomestico {
    constructor() {

    }
}

interface Eletrodomestico {
    imprimir?(): void
}

function imprimivel(constructor: Function) {
    constructor.prototype.imprimir = function () {
        console.log(this)
    }
}

//(<any>new Eletrodomestico()).imprimir()
const eletro = new Eletrodomestico()
eletro.imprimir && eletro.imprimir()

// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
}
@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}

new MudancaAdministrativa().critico()

function perfilAdmin<T extends Constructor>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args)

            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem Permisao')
            }
        }
    }
}

class ContaCorrente {
    @naoNegativo
    private saldo :number

    constructor(saldo:number){
        this.saldo = saldo
    }

    @congelar
    sacar(@paramInfo valor:number){

        if(valor <= this.saldo){
            this.saldo -= valor
            return true
        } else {
            return false
        }
    }
    @congelar
    getSaldo(){
        return this.saldo
    }
}

const cc = new ContaCorrente(10248.57);
cc.sacar(50000)
console.log(cc.getSaldo())

cc.getSaldo = function(){
    return this['saldo'] + 7000
}

console.log(cc.getSaldo())

//Object.Freeze
function congelar(alvo:any,nomePropiedade:string,
                  descritor:PropertyDescriptor ){

    console.log(alvo)
    console.log(nomePropiedade)
    descritor.writable = false
}

function naoNegativo(alvo:any,nomePropiedade:string){
    delete alvo[nomePropiedade]
    Object.defineProperty(alvo,nomePropiedade,{
        get: function(): any {
            return alvo["-" + nomePropiedade]
        },
        set: function(valor:any):void {
            if(valor <0){
                throw new Error('Saldo Invalido')
            } else {
                alvo["-" + nomePropiedade] = valor 
            }
        }
    })
}

function paramInfo(alvo:any,nomeMetodo:string,indiceParam:number){
    console.log(`Alvo:${alvo}`)
    console.log(`Metodo:${nomeMetodo}`)
    console.log(`Indice Param:${indiceParam}`)
}