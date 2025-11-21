//🧩 Nível 1 – Fundamentos

//Soma simples
function soma(a, b) {
    return a + b;
}

console.log(soma(5,5));

//Saudação personalizada
function saudar(nome){
    return `Olá, ${nome}`
}

console.log(saudar("Geovane"));

//Dobro de um número
function dobrar(n) {
    return n * 2;
}

console.log(dobrar(5));
console.log(dobrar(10));

//Número par ou ímpar
function ehPar(n) {
    if (n %2===0) {
        return `o numero ${n} é par`
    }else{
        return `o numero ${n} não é par`
    }
}

console.log(ehPar(2));

//Maior número
function maior(a, b) {
    if (a > b) {
        return `${a} é maior do que ${b}`
    }else{
        return `${a} não é maior do que ${b}`
    }
}

console.log(maior(91828, 9839621));

//⚙️ Nível 2 – Parâmetros e retorno

//Contar letras
function contarLetras(palavras){
    return palavras.length;
}

console.log(contarLetras("Geovane"));

//Área de um retângulo
function areaDeUmRetangulo(area, base) {
    const medida = parseFloat(area) * parseFloat(base);
    return `A área do retângulo é: ${medida}`;
}

console.log(areaDeUmRetangulo(7,9));

//Desconto
function calcularDesconto(preco, desconto) {
    const valorTotal = preco * desconto;

    const valorFormatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valorTotal)

    return `Você tem um desconto de ${valorFormatado}`;
    
}

console.log(calcularDesconto(100, 0.20));

//Converter Celsius para Fahrenheit
function converter(celsius){
    const Fahrenheit = celsius * (9/5) + 35;
    return Fahrenheit
}

console.log(converter(32));

//Reverter string
function reverter(texto) {
    const palavra = texto.split('').reverse().join('');

    return palavra;
}

console.log(reverter("JavaScript"));

//🧠 Nível 3 – Funções avançadas

//Arrow function de soma

const somarArrow = (x, y) => x + y;

console.log(somarArrow(10,50));

//Callback de saudação

function exiber(exiber) {
    console.log(exiber);
}

function executarSaudacao(ola, nome, callback){
    callback(`${ola}, ${nome}`)
}

executarSaudacao("Olá", "Geovane", exiber)

//Filtrar números pares

function filtrarPares(array){
   return array.filter((n)=> n %2 === 0)
}

console.log(filtrarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//Transformar nomes em maiúsculas

function paraMaiusculas(nomes) {
    return nomes.map((nome)=> nome.toUpperCase())
}

console.log(paraMaiusculas(["geovane","renata", "aurora"]));

//Somar todos os números de um array

function somarArray(nums) {
    return nums.reduce((valor, total) => valor + total)
}

console.log(somarArray([82,92,262,10,]));
