//Module Pattern
import { incrementar, decrementar, getContador } from "./funcoes.js";

incrementar();
incrementar();
incrementar();
decrementar();
console.log(getContador());

//1. Calculadora simples
import { somar, subtrair, multiplicar, dividir } from "./funcoes.js";

console.log(somar(5, 5));
console.log(subtrair(5, 5));
console.log(multiplicar(5, 5));
console.log(dividir(5, 5));

//2. Módulo de mensagens
import { saudar, despedir } from "./funcoes.js";
console.log(saudar("Geovane"));
console.log(despedir("Geovane"));

//🧠 Nível 2 — Export Default e Named Exports
import usuario from "./funcoes.js";

const {nome, idade, email} = usuario;

console.log(`Olá ${nome}, você tem ${idade} anos... Seu email: ${email}.`);

//4. Misto (default + named)
//import exibirVersao, {obj} from "./funcoes.js";

//console.log(`Tema: ${obj.tema}`);
//exibirVersao();

//⚙️ Nível 3 — Módulos interligados
import { Produto } from "./funcoes.js";

const produto = new Produto("Notobook", 2500);

console.log(produto.mostrarItens());
