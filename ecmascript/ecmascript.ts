// let const


// Arrow Function

const somar = function(n1:number,n2:number) : number{
    return n1 + n2;
}

console.log(somar(2,2))

const subtrair = (n1:number,n2:number) :number =>{ return n1 -n2} 
console.log(subtrair(2,3))

const saudacao = () => console.log('Olà');
saudacao();

//this passando valor para um this

function normalComThis() {
    console.log(this)
}
const normalComThisEspecial = normalComThis.bind(2);
normalComThisEspecial()

//Parametro Padrao
function contagemRegressica(
    inicio:number=5,
    fim:number = inicio -5
    ): void {
    console.log(inicio)
    while (	inicio > fim) {
        inicio--
        console.log(inicio)
    }
    console.log('fim')
}

contagemRegressica()

//Rest & Spread (Juntar/Separar)
const numberss =[1,10,99,-5]
console.log(Math.max(...numberss))//1,10,99,-5
console.log(Math.max(numberss[0],numberss[1],
                     numberss[2],numberss[3]))//1,10,99,-5 // sem rest

const turmaAa: string[] =['João','Maria','Fernanda']
const turmaBb: string[] = ['Fernando','Miguel',
                            'Lorena',...turmaAa]

function retornarArray(...args:number[]): number[] {
    return args
}

const numeross = retornarArray(1,2,3,4,5,6)
console.log(numeross)

//Resr e Spread (Tupla)
const tuplas: [number,string,boolean] = [1,'abc',false]

function tuplaParams(a:number,b:string,c:boolean) : void{
    console.log(`1) ${a} ${b} ${c}`)
}

tuplaParams(...tuplas)

function tuplaParams2(...params:[number,string,boolean]) : void{
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}
tuplaParams2(...tuplas)

//Destructing (array)

const caracteristicass = ['Motor Zetez 1.8',2020]
const Motor = caracteristicass[0]
const Ano = caracteristicass[1]

const [Motor2,Ano2] = caracteristicass;

const [z,y] = [1,2]

//Destructing (Object)

const items = {
    nome:'SSD 480GB',
    preco: 200,
    caracteristica: {
        ws: 'Importado'
    }
}

const Nomeitem = items.nome
const Preco = items.preco

//nome e nome do objeto : e un alilas pra variavel
const {nome: ns,preco : ps,caracteristica:{ws}} = items
console.log(ns)
console.log(ps)
console.log(ws)


// Promises

function Esperar3SegundoPromise(){

    return new Promise((resolve : any) => {
        setTimeout(() =>{
            resolve('3s depois Promise ....')
        },300)  
    })
}

Esperar3SegundoPromise()
        .then(dado => console.log(dado))

fetch('https://swapi.dev/api/films/1/')
        .then(res => res.json())
        .then(carc => carc.characters)
        .then(pessoas => fetch(pessoas[0]))
        .then(resFilm => resFilm.json())
        .then(filmessss => console.log(filmessss))
        .catch(err => console.log(err))

