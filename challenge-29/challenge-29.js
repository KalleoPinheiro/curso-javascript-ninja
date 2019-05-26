((DOM) => {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  const app = (function () {
    return {
      init: function init() {
        console.log('Iniciou');
        this.getCompanyInfo();
        this.initEvents();
      },

      getCompanyInfo: function getCompanyInfo() {
        const api = new XMLHttpRequest();
        api.open('GET', './company.json', true);
        api.send();
        api.addEventListener('readystatechange', this.getDataCompany, false);
      },

      getDataCompany: function getDataCompany() {
        if (!app.isReady.call(this)) {
          console.log('Erro!');
          return;
        }
        const data = JSON.parse(this.responseText);
        const companyName = DOM('[data-js="name"]');
        const companyPhone = DOM('[data-js="phone"]');
        companyName.textContent = data.name;
        companyPhone.textContent = data.phone;
      },

      initEvents: function initEvents() {
        const $form = DOM('[data-js="form"]');
        $form.addEventListener('submit', app.submit, false);
      },

      isReady: function isReady() {
        return this.readyState === 4 && this.status === 200;
      },

      handleSubmit: function handleSubmit() {
        const form = DOM('[data-js="form"]');
        form.addEventListener('submit', app.submit, false);
      },

      submit: function submit(event) {
        event.preventDefault();
        const $table = DOM('[data-js="data"]');
        $table.appendChild(app.fillTable());
      },

      fillTable: function fillTable() {
        const $fragment = document.createDocumentFragment();
        const $tr = document.createElement('tr');

        const $image = DOM('[data-js="image"]');
        const img = document.createElement('img');
        img.setAttribute('src', $image.value);
        $tr.appendChild(img);

        const $tdBrand = document.createElement('td');
        const $brand = DOM('[data-js="brand"]');
        $tdBrand.textContent = $brand.value;
        $tr.appendChild($tdBrand);

        const $tdYear = document.createElement('td');
        const $year = DOM('[data-js="year"]');
        $tdYear.textContent = $year.value;
        $tr.appendChild($tdYear);

        const $tdPlate = document.createElement('td');
        const $plate = DOM('[data-js="plate"]');
        $tdPlate.textContent = $plate.value;
        $tr.appendChild($tdPlate);

        const $tdColor = document.createElement('td');
        const $color = DOM('[data-js="color"]');
        $tdColor.textContent = $color.value;
        $tr.appendChild($tdColor);

        $fragment.appendChild($tr);

        return $fragment;
      },
    }
  })()

  app.init();


})(window.DOM);
