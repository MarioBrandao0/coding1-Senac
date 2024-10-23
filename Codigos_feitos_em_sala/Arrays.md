# Arrays
### .Join()
> O método junta todos os elementos de um array em uma string e retorna esta string.
```js
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"

```
#### Parâmetros
> Específica uma string para separar cada elemento adjacente do array. O separador é convertido em uma string se necessário. Se omitido, os elementos do array são separados com uma vírgula (","). Se o separador for uma string vazia, todos os elementos são juntados sem nenhum caracter entre eles.

---

### Array.from([])
O método estático cria uma nova instância de cópia superficial a partir de um objeto iterável ou semelhante a uma matriz.
```js
console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]


```
#### Descrição
O método Array.from() permite criar arrays a partir de objetos iteráveis, como Map e Set, ou de objetos que têm a propriedade length e índices. Para transformar objetos comuns em arrays, você pode usar Object.keys(), Object.values() ou Object.entries(). Para iteráveis assíncronos, utilize Array.fromAsync().

Ele nunca gera arrays esparsos, portanto, índices ausentes se tornam undefined no novo array. Além disso, Array.from() aceita um parâmetro opcional, mapFn, para aplicar uma função a cada elemento durante a criação do array, semelhante ao método map(), mas sem criar um array intermediário.

Esse método é genérico e, se uma subclasse de Array herdar from(), ela retornará instâncias dessa subclasse. O valor de this pode ser qualquer construtor que aceite um argumento representando o comprimento do novo array.

---
## Matriz.fromAsync()
> O método `Array.fromAsync()` permite criar arrays a partir de objetos iteráveis assíncronos, como `ReadableStream` e `AsyncGenerator`, ou, se não forem assíncronos, de objetos iteráveis normais ou arrays. Ele itera sobre esses iteráveis de forma semelhante ao `for await...of`.

#### Principais características:

> - Retorna uma `Promise` que resolve para a instância do array.
> - Aguarda cada elemento se o iterável não for assíncrono.
> - Se uma função `mapFn` for fornecida, seus resultados também serão aguardados.

#### Diferenças em relação ao `Promise.all()`:

> 1. `Array.fromAsync()` aguarda os valores sequencialmente, enquanto `Promise.all()` aguarda todos simultaneamente.
> 2. `Array.fromAsync()` itera de forma preguiçosa, recuperando o próximo valor apenas após o atual ser definido, enquanto `Promise.all()` recupera todos os valores antecipadamente.
### Exemplos
```js
const asyncIterable = (async function* () {
  for (let i = 0; i < 5; i++) {
    await new Promise((resolve) => setTimeout(resolve, 10 * i));
    yield i;
  }
})();

Array.fromAsync(asyncIterable).then((array) => console.log(array));
// [0, 1, 2, 3, 4]

```
---
