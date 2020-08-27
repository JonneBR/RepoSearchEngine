const inputUser = document.getElementById('user');
const buttonElement = document.querySelector('button');

const name = JSON.parse(localStorage.getItem('list_names')) || [];

function addNameArray(liValue) {
  var nameList = liValue;
  name.push(nameList);
  saveToStorage();
}

function printArrayNames() {
  if (name.length > 0) {
    for (var i = 0; i < name.length; i++) {
      var lista = document.getElementById('lista');
      var li = document.createElement('li');
      li.innerHTML = name[i];
      lista.appendChild(li);
    }
  }
}

function acessarRepo(repoUser) {
  var carregando = document.getElementById('carregando');
  if (carregando && carregando.length) carregando.outerHTML = '';
  var lista = document.getElementById('lista');
  var lista_html = lista.innerHTML;
  lista.innerHTML = '<li id="carregando">Carregando...</li>';

  axios
    .get(repoUser)
    .then(function (response) {
      var objLength = response.data.length;

      lista.innerHTML = lista_html;

      for (var i = 0; i < objLength; i++) {
        var li = document.createElement('li');
        li.innerHTML = response.data[i].name;
        addNameArray(li.innerHTML);
        lista.appendChild(li);
      }
    })
    .catch(function (error) {
      console.warn(error);
    });
}

function buscarNomeNaAPI() {
  var inputUserNameToLower = inputUser.value.toLowerCase();

  axios
    .get('https://api.github.com/users/' + inputUserNameToLower)
    .then(function (response) {
      var apiUserNameToLower = response.data.login.toLowerCase();
      if (inputUserNameToLower === apiUserNameToLower) {
        repoUser = response.data.repos_url;
        acessarRepo(repoUser);
        // console.log(response.data.login);
      }
    })
    .catch(function (error) {
      console.warn(
        error,
        'Não pode fazer a requisição. Usuário pode estár inválido.'
      );
    });
  //   console.log(inputUser.value);
}
buttonElement.onclick = buscarNomeNaAPI;
printArrayNames();

function saveToStorage() {
  localStorage.setItem('list_names', JSON.stringify(name));
}
