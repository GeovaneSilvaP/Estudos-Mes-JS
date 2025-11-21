//✅ Exercícios de Lógica – Intermediário

//1. Verificar palíndromo ignorando espaços e pontuação

function ehPalindromo(frase) {
  const limpar = frase
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");

  const reverso = limpar.split("").reverse().join("");

  return limpar === reverso;
}

console.log(ehPalindromo("A base do teto desaba"));
console.log(ehPalindromo("JavaScript"));
console.log(ehPalindromo("Socorram-me subi no onibus em Marrocos"));

//2. Contar quantas vezes cada letra aparece

function contarLetras(str) {
  const resultador = {};

  for (const letra of str.toLowerCase()) {
    if (letra === " ") continue;

    if (resultador[letra]) {
      resultador[letra]++;
    } else {
      resultador[letra] = 1;
    }
  }

  return resultador;
}

console.log(contarLetras("JavaScript"));
console.log(contarLetras("banana"));

//3. Encontrar o segundo maior número do array

function segundoMaior(numeros) {
  let maior = -Infinity;
  let segundo = -Infinity;

  for (const n of numeros) {
    if (n > maior) {
      segundo = maior;
      maior = n;
    } else if (n > segundo && n !== maior) {
      segundo = n;
    }
  }

  return segundo;
}

console.log(segundoMaior([10, 5, 20, 8, 7]));
console.log(segundoMaior([100, 5, 200, 8, 7]));

//4. Agrupar números pares e ímpares

function separarParesImpares(arr) {
  const resultado = {
    pares: [],
    impares: [],
  };

  for (const num of arr) {
    if (num % 2 === 0) {
      resultado.pares.push(num);
    } else {
      resultado.impares.push(num);
    }
  }

  return resultado;
}

console.log(separarParesImpares([1, 2, 3, 4, 5, 6]));

//5. Somar apenas números positivos

function somaPositivos(arr) {
  let soma = 0;

  for (const num of arr) {
    if (num > 0) {
      soma += num;
    }
  }

  return soma;
}

console.log(somaPositivos([5, -2, 10, -8, 3]));

//6. Criar um contador usando closure

function criarContador() {
  let contagem = 0;

  return function () {
    contagem++;
    return contagem;
  };
}

const c = criarContador();

console.log(c());
console.log(c());
console.log(c());

//7. Remover valores duplicados (sem Set)
function removendoDuplicados(arr) {
  const resultado = [];

  for (const num of arr) {
    if (!resultado.includes(num)) {
      resultado.push(num);
    }
  }

  return resultado;
}

console.log(removendoDuplicados([1, 2, 2, 3, 4, 4, 5]));

//8. Filtrar objetos por uma chave dinâmica

const usuarios = [
  { nome: "Ana", cidade: "São Paulo", idade: 25 },
  { nome: "Carlos", cidade: "Rio de Janeiro", idade: 30 },
  { nome: "Beatriz", cidade: "São Paulo", idade: 19 },
];

function filtrarPor(lista, chave, valor) {
  return lista.filter((item) => item[chave] === valor);
}

console.log(filtrarPor(usuarios, "cidade", "São Paulo"));

//9. Criar uma função que gera senha aleatória
function gerarSenha(tamanho, opcoes = {}) {
  const { numeros = true, simbolos = true, maiusculas = true } = opcoes;

  const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
  const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numerosSet = "0123456789";
  const simbolosSet = "!@#$%&*()?[]{}<>+-/";

  let caracteres = letrasMinusculas;

  if (maiusculas) caracteres += letrasMaiusculas;
  if (numeros) caracteres += numerosSet;
  if (simbolos) caracteres += simbolosSet;

  let senha = "";

  for (let i = 0; i < tamanho; i++) {
    const aleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[aleatorio];
  }

  return senha;
}

console.log(gerarSenha(10)); // senha com tudo
console.log(gerarSenha(12, { numeros: false })); // sem números
console.log(gerarSenha(8, { simbolos: false })); // sem símbolos
console.log(gerarSenha(16, { maiusculas: false, simbolos: false }));