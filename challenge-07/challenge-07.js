/*
Crie um array com 5 items (tipos variados).
*/
var array = ['string', 1, function funcaoNoArray() {
  return 'Função detro do array'
}, {
  objeto: {
    cor: 'azul',
    tamanho: 1.9
  }
}, null];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item) {
  array.push(item);
  return array;
};

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem(['a', 2, {
  item: 'valor do item'
}]);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é: ' + array[5][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + array.length + ' itens.');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + array[5].length + ' itens.');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var num = 10;
var pares = [];
while (num <= 20) {
  if (num % 2 === 0) {
    pares.push(num);
  }
  num++
}
console.log('Números pares entre 10 e 20: ' + pares);
// ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var num = 10;
var impares = [];
while (num <= 20) {
  if (num % 2 !== 0) {
    impares.push(num);
  }
  num++
}
console.log('Números ímpares entre 10 e 20:' + impares);

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
var pares = [];
for (let x = 100; x <= 120; x++) {
  if (x % 2 === 0) {
    pares.push(x);
  }
}
console.log('Números pares entre 100 e 120:' + pares);

var impares = [];
for (let y = 111; y <= 125; y++) {
  if (y % 2 === 1) {
    impares.push(y);
  }
}
console.log('Números ímpares entre 111 e 125:' + impares);
