import { HelloWorldComponent } from "../hello-world/hello-world.component";

function calcularArea() {

    const obj = {width: 10, height: 30};

    const area = obj.width * obj.height;

    return area;
}

function usuario() {
    const usuario = {
        nome: "Maicon",
        idade: 19
    }
}

function calculo() {
    return Math.random() < 5;
}

function validacao() {
    const valor = Math.random() < 0.5 ? 'a' : 'b';

    if (valor === 'a') {

    } else if (valor === 'b') {

    }
}

function exibirMensagem(pessoa: string, data: string) {

    console.log('Olá ${pessoa}, hoje é ${data}');
}

exibirMensagem('Maicon', '26/08/24');

let mensagem: string = 'hello world';

let mensagem2: 'hello world';

let number: number = 3.3;

let number2: number = 3.4;

function olaMundo(mensagem: string): string {

    return 'Ola Mundo ${mensagem};'
}

function exibirCoordenadas (pt:{x: number, y: number}) {

    return '${pt.x} ${pt.y};'
}

exibirCoordenadas ({x:4 , y: 6});

function exibirNome(obj:{nome:string, sobrenome?:string}): string {

    let mensagem = '';

    if (obj.sobrenome === undefined) {
        mensagem = 'Seu nome é ${obj.nome}';
    }
    else
    {
        mensagem = 'Seu nome é ${obj.nome} e o sobrenome é ${obj.sobrenome}';
    }

    return mensagem;  
}

exibirNome({nome: 'Maicon'});

function exibirIds(id: number | string) {

    let mensagem = '';

    if (typeof id === 'number') {
        mensagem = 'o seu id numérico é ' + id.toString();
    }
    else{
        mensagem = id.toUpperCase();
    }

    return mensagem;
}

exibirIds(3);

exibirIds('345');

type Ponto = {
    
    x: number,
    y: number
}

function imprimirPonto(p: Ponto){

    return `O seu ponto é ${p.x} ${p.y}`;
}

imprimirPonto({x: 3, y: 5});

function imprimirTexto(texto: string, alinhamento: 'left' | 'right' | 'center'){

}

imprimirTexto('meu texto', 'center')

var teste = null;

console.log(teste);

var teste2;

console.log(teste2);

function vivendoPerigosamente(x?: number | null) {
    console.log(x?.toFixed());
}

vivendoPerigosamente();

function fazerAlgo(lista: Array<string>) {

}

function fazerAlgoTambém(lista: string[]) {

}

fazerAlgo(new Array('hello', 'world'));

fazerAlgoTambém(['hello', 'world']);

class Point {
     
    x: number = 0;
    y: number = 0;
}

let p = new Point();

p.x = 4;
p.y = 4;

console.log(p.x + ' ' + p.y);

class BoasVindas {

    mensagem: string;

    constructor() {
        this.mensagem = 'Bem vindo'
    }
}

let m = new BoasVindas();

console.log(m.mensagem);

class Saudaçoes {
    readonly mensagem: string;

    constructor(){
        this.mensagem = 'Muito bem-vindo!';
    }

    dizerOla(){
        console.log(this.mensagem)
       }
}

class C {
   _length = 0;
   
   get length(): number {
    return this._length;
   }

   set length(value: number) {
    this._length = value;
   }
   
}

interface Pingavel {
    ping(): void
}

 class Animal {
   protected andar() {
        console.log('animal andando');
    }

 }

 class Cachorro extends Animal {
     latir() {
      console.log('ua ua')

        this.andar();
    }

 }



 