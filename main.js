const inputUser = document.getElementById('user');
const buttonAdd = document.getElementById('btn-add');
const buttonDelete = document.getElementById('btn-delete');
console.log('button', buttonAdd);
console.log('buttonDelete', buttonDelete);

const name = JSON.parse(localStorage.getItem('list_names')) || [];

console.log('NAME', name);

function deleteRepo() {
  var arrayLength = name.length;
  var liElement = document.getElementById('lista');
  for (var i = 0; i < arrayLength; i++) {
    // console.log('length', name.length);
    // console.log('i: ', i);
    name.splice(0, 1);
    saveToStorage();
    liElement.removeChild(liElement.childNodes[0]);
  }
}

function addNameArray(liValue) {
  // var nameList = liValue;
  name.push(liValue);
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
buttonAdd.onclick = buscarNomeNaAPI;
buttonDelete.onclick = deleteRepo;
printArrayNames();

function saveToStorage() {
  localStorage.setItem('list_names', JSON.stringify(name));
}
