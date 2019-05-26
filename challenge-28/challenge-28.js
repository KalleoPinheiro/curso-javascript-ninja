(DOM => {
  'use strict';
  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

  const api = new XMLHttpRequest();
  let logradouro = DOM('[data-js="logradouro"]');
  let bairro = DOM('[data-js="bairro"]');
  let estado = DOM('[data-js="estado"]');
  let cidade = DOM('[data-js="cidade"]');
  const cep = DOM('[data-js="cep"]');
  const inputCep = DOM('[data-js="inputCep"]');
  const form = DOM('[data-js="form"]');
  const message = DOM('[data-js="messageContent"]');

  const baseUrl = 'http://apps.widenet.com.br/busca-cep/api/cep/[CEP].json/';

  form.addEventListener('submit', handlerSubmit, false);

  function handlerSubmit(event) {
    event.preventDefault();
    try {
      if (!getCep()) {
        fillDom(null);
        throw new Error('Cep inválido!');
      };
      const url = replaceCep(baseUrl);
      api.open('get', url);
      api.send();
      showMessage('loading');
      api.addEventListener('readystatechange', hasResponse, false);
    } catch (error) {
      showMessage('error');
      fillDom(null);
      console.error(error.message);
    }
  }

  function hasResponse() {
    if (handler()) {
      const data = parseData(api.responseText);
      debugger
      if (!data) {
        fillDom(null);
        throw new Error('Cep inválido!');
      }
      fillDom(data);
    };
  }

  function handler() {
    return api.readyState === 4 && api.status === 200;
  }

  function getCep() {
    const pattern = /^\d{8}$/g;
    return pattern.test(inputCep.value) ? inputCep.value : null;
  }

  function parseData(response) {
    let result;
    try {
      showMessage('success');
      result = JSON.parse(response);
    } catch (error) {
      showMessage('error');
      result = null;
    }
    return result;
  }

  function fillDom(data) {
    logradouro.textContent = data ? data.address : '-';
    bairro.textContent = data ? data.district : '-';
    estado.textContent = data ? data.state : '-';
    cidade.textContent = data ? data.city : '-';
    cep.textContent = data ? data.code : '-';
  }

  function showMessage(type) {
    const status = {
      success: replaceCep('Endereço referente ao CEP [CEP]:'),
      error: replaceCep('Não encontramos o endereço para o CEP [CEP].'),
      loading: replaceCep('Buscando informações para o CEP [CEP]...')
    };
    message.textContent = status[type];
  }

  function replaceCep(string) {
    return string.replace('[CEP]', getCep());
  }
})(window.DOM);
