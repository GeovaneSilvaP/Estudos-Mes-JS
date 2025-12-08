//📅 SEMANA 3 – JSON, Storage e Gerenciamento de Dados

const user = { id: 1, nome: "Geovane", online: true };
const json = JSON.stringify(user);
console.log(json);

// localStorage e sessionStorage de JavaScript

const nome = "Geovane";

localStorage.setItem("nome", nome);

//remover Item

localStorage.removeItem("nome");

//limpar todos os itens
localStorage.setItem("a", 1);
localStorage.setItem("b", 2);

localStorage.clear();

//regartar items salvos

localStorage.setItem("filha", "Aurora")

const mostrarFilha = localStorage.getItem('filha')

console.log(mostrarFilha);

// salvar obj

const user2 = [
  { id: 1, name: "Aurora", idade: 23, cidade: "Natal" },
  { id: 2, name: "Amelie", idade: 17, cidade: "Natal" },
];

localStorage.setItem("user2", JSON.stringify(user2))

const getUser2 = localStorage.getItem("user2")

console.log(getUser2);

const userObject = JSON.parse(getUser2)

console.log(userObject);
