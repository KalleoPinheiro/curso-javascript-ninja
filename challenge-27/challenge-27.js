(() => {
  'use strict';
  /*
    Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
    métodos semelhantes aos que existem no array, mas que sirvam para os
    elementos do DOM selecionados.
    Crie os seguintes métodos:
    - forEach, map, filter, reduce, reduceRight, every e some.

    Crie também métodos que verificam o tipo do objeto passado por parâmetro.
    Esses métodos não precisam depender de criar um novo elmento do DOM, podem
    ser métodos estáticos.

    Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
    no objeto, como nos exemplos abaixo:
    DOM.isArray([1, 2, 3]); // true
    DOM.isFunction(function() {}); // true
    DOM.isNumber('numero'); // false

    Crie os seguintes métodos para verificação de tipo:
    - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
    O método isNull deve retornar `true` se o valor for null ou undefined.
  */

  function DOM(elements) {
    this.element = document.querySelectorAll(elements);
  };

  DOM.prototype.on = function on(eventType, action) {
    Array.prototype.forEach.call(this.element, function (nodeElement) {
      nodeElement.addEventListener(eventType, action, false);
    });
  };

  DOM.prototype.off = function off(eventType, action) {
    Array.prototype.forEach.call(this.element, function (nodeElement) {
      nodeElement.removeEventListener(eventType, action, false);
    });
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments);
  };

  const $a = new DOM('[data-js="link"]');

  $a.forEach(item => console.log(item));

  $a.map(item => console.log(`Item -> ${item}`));

  console.log($a.filter(item => item.firstChild.nodeValue === 'Link 1'));


})();
