const prompt = require('prompt-sync')();

let livros = ['JavaScript', 'Logica de programação', 'Clean Code', 'Scrum', 'Guia HTML e CSS3', 'MongoDB'];
let hqs = ['Superman' ,'X-men', 'Vingadores', 'Batman', 'Mulher Maravilha', 'Feiticeira Escarlate'];
const juntarLivros = livros.concat(hqs)

const tamanhoLivros = livros.length;
const tamanhoTudo = juntarLivros.length 


const corredorA1 = livros.slice(0, tamanhoLivros /2);

const corredorA2 = livros.slice(tamanhoLivros / 2);

const corredorTudo1 = juntarLivros.slice(0, tamanhoTudo /2);
const corredorTudo2 = juntarLivros.slice(tamanhoTudo /2)

console.log(`O corredor todo junto 1: `, corredorTudo1)
console.log(`O corredor todo junto 2: `, corredorTudo2)

console.log(juntarLivros.sort())

