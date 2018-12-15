(() => {
  'use strct'
  /*
  Envolva todo o código desse desafio em uma IIFE.
  Crie um arquivo chamado index.html e adicione esse script ao HTML.
  */

  /*
  Crie uma função construtora chamada "Person". Esse construtor deve ter
  as seguintes características:
  - Deve receber 3 parâmetros: `name`, `lastName` e `age`;
  - Deverá ter 3 propriedades:
  - `name` - que receberá o valor do parâmetro `name`;
  - `lastName` - que receberá o valor do parâmetro `lastName`;
  - `age` - que receberá o valor do parâmetro `age`;
  - Deverá ter 3 métodos:
  - `getFullName` - que deve retornar o nome completo do objeto criado,
  no formato:
  - "[NAME] [LASTNAME]"
  - `getAge` - que deverá retornar a idade (age);
  - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
  iremos passar um único argumento, que é a quantidade de anos que devem ser
  adicionados à idade original (age). Esse método deverá retornar o objeto
  que será instanciado.
  */
  function CreatePerson(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function () {
      const fullName = `${this.name} ${this.lastName}`;
      return fullName.toUpperCase();
    };
    this.getAge = function () {
      return this.age;
    };
    this.addAge = function () {
      return this.age += arguments[0];
    };
  };

  /*
  Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
  pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
  parâmetros corretamente para o construtor para criar as novas pessoas.
  Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
  */
  console.log('Novas pessoas criadas à partir de Person:');
  const jeiciele = new CreatePerson('Jeiciele', 'da Silva', 25);
  const cleide = new CreatePerson('cleide', 'Aparecida', 39);
  const nathan = new CreatePerson('nathan', 'Pinheiro', 15);
  const voMaria = new CreatePerson('vó Maria', 'Alves', 79);

  console.log(jeiciele);
  console.log(nathan);
  console.log(cleide);
  console.log(voMaria);

  /*
  Mostre no console o nome completo de cada pessoa.
  */
  console.log('\nNomes das pessoas:');
  console.log(jeiciele.getFullName());
  console.log(cleide.getFullName());
  console.log(nathan.getFullName());
  console.log(voMaria.getFullName());

  /*
  Mostre no console as idades de cada pessoa, com a frase:
  - "[NOME COMPLETO] tem [IDADE] anos."
  */
  console.log('\nIdade das pessoas:');
  console.log(`${jeiciele.getFullName()} tem ${jeiciele.age} anos.`);
  console.log(`${cleide.getFullName()} tem ${cleide.age} anos.`);
  console.log(`${nathan.getFullName()} tem ${nathan.age} anos.`);
  console.log(`${voMaria.getFullName()} tem ${voMaria.age} anos.`);

  /*
  Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
  cada um. A frase deverá ser no formato:
  - "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
  */
  console.log('\nNova idade das pessoas:');
  jeiciele.addAge(2);
  nathan.addAge(5);
  cleide.addAge(1);
  voMaria.addAge(2);
  console.log(`${jeiciele.getFullName()} agora tem ${jeiciele.age} anos.`);
  console.log(`${cleide.getFullName()} agora tem ${cleide.age} anos.`);
  console.log(`${nathan.getFullName()} agora tem ${nathan.age} anos.`);
  console.log(`${voMaria.getFullName()} agora tem ${voMaria.age} anos.`);

})();
