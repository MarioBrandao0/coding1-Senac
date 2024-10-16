const prompt = require('prompt-sync')()
// ----------------------------------------------------------------------------

let frutas = ['Banana', 'Manga', 'Pera', 'Maça']
let escolha = prompt('Qual fruta você quer adicionar: ')

const atualizarLivros = frutas.splice(2, 0, 'Node.js')

console.log(frutas)

frutas.pop()
frutas.push(escolha)
console.log(frutas)

console.log(`O total de frutas é ${frutas.length}`)
console.log(`Teste ${atualizarLivros}`)