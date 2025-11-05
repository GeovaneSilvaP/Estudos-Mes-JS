//Module Pattern
let contador = 0;

function incrementar() {
  contador++;
  console.log(`O valor atual: ${contador}`);
}

function decrementar() {
  contador--;
  console.log(`O valor atual: ${contador}`);
}

function getContador() {
  return contador;
}

export { incrementar, decrementar, getContador };

//1. Calculadora simples
function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

export { somar, subtrair, multiplicar, dividir };

//2. Módulo de mensagens
function saudar(nome) {
  return `Olá ${nome}`;
}

function despedir(nome) {
  return `Tchau, ${nome}`;
}

export { saudar, despedir };

//🧠 Nível 2 — Export Default e Named Exports
const usuario = {
  nome: "Aurora",
  idade: 23,
  email: "aurorasil45sil@gmail.com",
};

export default usuario;

//4. Misto (default + named)
export const obj = {
  tema: "claro",
  idioma: "pt-Br",
};

const variavel = "1.0.0";

function exibirVersao() {
  console.log(`Versão: ${variavel}`);
}

//export default exibirVersao;

//⚙️ Nível 3 — Módulos interligados

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  mostrarItens(){
    return `${this.nome} - ${this.preco}`
  }
}

export {Produto}