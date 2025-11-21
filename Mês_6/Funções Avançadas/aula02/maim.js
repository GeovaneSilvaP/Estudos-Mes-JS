//✅ 1. Exercícios com Higher-Order Functions

//1.1 – Função que recebe outra função

function executarAcao(func, valor) {
  return func(valor);
}

function dobrarValor(n) {
  return n * 2;
}

console.log(executarAcao(dobrarValor, 5));

//1.2 – Função que retorna outra função (factory)

function criarMensagem(tipo) {
  function msg(m) {
    return `[${tipo}]: ${m}`;
  }

  return msg;
}

const error = criarMensagem("ERRO");
console.log(error("Falha ao conectar."));

//✅ 2. Exercícios de Closures

//2.1 – Contador com closure

function criarContador() {
  let contagem = 0;

  return {
    incrementar() {
      contagem++;
      return contagem;
    },
    decrementar() {
      contagem--;
      return contagem;
    },
    valor() {
      return contagem;
    },
  };
}

const contador = criarContador();
console.log(contador.incrementar());
console.log(contador.incrementar());
console.log(contador.incrementar());
console.log(contador.decrementar());
console.log(contador.valor());

//2.2 Gerador de IDs

