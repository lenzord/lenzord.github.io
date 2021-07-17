const url = 'https://dog.ceo/api/breeds/image/random';
const dogImg = document.querySelector('[data-js="dog-img"]');

fetch(url).then(dogData => {
  if (!dogData.ok) { // a propriedade .ok retorna um booleano indicando se o HTTP Status Code dessa resposta (dogData) ta entre 200 e 299, se sim, significa que a requisição foi bem sucedida, senão, que é o que estamos verificando, faremos isto:
    throw new Error(`HTTP error, status ${dogData.status}`)
  }
  return dogData.json(); // essa invocação retorna uma Promise. Se der tudo certo, filtramos novamente a resposta, para podermos visualizar os dados em formato json().
})
.then(({ message }) => { // then para tratar a nova Promise. Fazemos um destructuring para obtermos o valor da propriedade message que queremos.
  dogImg.setAttribute('src', message)
})
.catch(error => { // captura o erro especificado na linha 162 e o imprime.
  console.log(error.message);
});

// commiting