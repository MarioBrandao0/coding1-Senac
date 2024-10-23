const prompt = require('prompt-sync')();

const livros = ["JavaScript Assertivo", "Angular", "Clean Code"];

const localLivros = [3, 4, 1];
const listaLocalElivros = [livros, localLivros];

console.log(`O livro ${listaLocalElivros[0][2]}, esta na prateleira: ${listaLocalElivros[1][2]}`)