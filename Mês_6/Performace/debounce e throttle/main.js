const texto = document.getElementById('texto');;
const input = document.getElementById('input');

function debounce(fn, delay = 500) {
    let timer;

    return (...args) =>{
        clearTimeout(timer);
        timer = setTimeout(()=> fn(...args), delay);
    }
}

const atualizaTexto = debounce((event) => {
    texto.innerText = event.target.value;
}, 500);

input.addEventListener('keyup', atualizaTexto);

//Teste
const users = [
    {name: 'Geovane', age: 23},
    {name: 'Maria', age: 30},
    {name: 'João', age: 20},
];

const filtrarIdade = users.filter((user)=>{
    return user.age >= 25;
})

console.log(filtrarIdade);
