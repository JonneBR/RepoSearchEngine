const inputUser = document.getElementById('user');
const buttonAdd = document.getElementById('btn-add');
const buttonDelete = document.getElementById('btn-delete');
const menuContainer = document.getElementsByClassName('menu-container');
const userProfile = document.getElementById('user-profile');

const userRepositories = document.getElementById('user-repositories');

const name = JSON.parse(localStorage.getItem('list_names')) || [];

const userProfileData = JSON.parse(localStorage.getItem('list_names')) || [];


console.log('NAME', name);

function getMenuHiddenOrVisible(array) {
  array > 0 ? menuContainer[0].style.visibility = 'visible' : menuContainer[0].style.visibility = 'hidden'; 
}

function highligthMenuProfile(clicked){
  clicked > 0 ? userProfile.style.color = 'grey' : userProfile.style.color = 'white';
}

function highligthMenuRepo(clicked){
  clicked > 0 ? userRepositories.style.color = 'grey' : userRepositories.style.color = 'white';
}

function deleteRepo() {
  var arrayLength = name.length;
  var liElement = document.getElementById('lista');
  for (var i = 0; i < arrayLength; i++) {
    getMenuHiddenOrVisible(0);
    name.splice(0, 1);
    saveToStorage();
    liElement.removeChild(liElement.childNodes[0]);
  }
}

function addNameArray(liValue) {
  name.push(liValue);
  saveToStorage();
}

function printArrayNames() {
  name.length > 5 ? highligthMenuRepo(0) : highligthMenuProfile(1); // Highligth menu

  if (name.length > 0) {
    for (var i = 0; i < 1; i++) {
      var img = document.createElement('img');
      img.src = name[i];
      document.getElementById('lista').appendChild(img);
     
    }
    for (var i = 1; i < name.length; i++) { // bug of image and Name is here
      var lista = document.getElementById('lista');
      var li = document.createElement('li');
      li.innerHTML = name[i];
      lista.appendChild(li);
    }
  }
  getMenuHiddenOrVisible(name.length);
}



// function acessarRepo(repoUser, profileImage) {
//   var carregando = document.getElementById('carregando');
//   if (carregando && carregando.length) carregando.outerHTML = '';
//   var lista = document.getElementById('lista');
//   var lista_html = lista.innerHTML;
//   lista.innerHTML = '<li id="carregando">Carregando...</li>';

//   axios
//     .get(repoUser)
//     .then(function (response) {
//       var objLength = response.data.length;
//       lista.innerHTML = lista_html;
    

//       var img = document.createElement('img');
//       img.src = profileImage;
//       document.getElementById('lista').appendChild(img);
//       addNameArray(profileImage);

//       for (var i = 0; i < objLength; i++) {
//         var li = document.createElement('li');

//         li.innerHTML = response.data[i].name;
//         addNameArray(li.innerHTML);
//         getMenuHiddenOrVisible(li.innerHTML);
//         lista.appendChild(li);
//         menuContainer[0].style.visibility = 'visible';
//       }
//     })
//     .catch(function (error) {
//       console.warn(error);
//     });
// }

// function ExibirMensagemCarregando(){
//   var carregando = document.getElementById('carregando');
//   if (carregando && carregando.length) carregando.outerHTML = '';
//   var lista = document.getElementById('lista');
//   var lista_html = lista.innerHTML;
//   lista.innerHTML = '<li id="carregando">Carregando...</li>';
// }



async function checarUsuarioExisteAPI() {
  // var profileImage = response.data.avatar_url;
      // var userUrl = response.data.html_url;
      // console.log('?',userUrl);
  // highligthMenuRepo(1);

  axios.get('https://api.github.com/users/' + inputUser.value.toLowerCase())
  .then(function (response) {
      if (inputUser.value.toLowerCase() === response.data.login.toLowerCase()) {
        getMenuHiddenOrVisible(1);
        // repoUser = response.data.repos_url;
        PegarDadosNoRepositorio(response);
       
      }
      
    })
    .catch(function (error) {
      console.warn(
        error,
        'Não pode fazer a requisição. Usuário pode estár inválido.'
      );
    });
}

buttonAdd.onclick = checarUsuarioExisteAPI;
buttonDelete.onclick = deleteRepo;
// userProfile.onclick = userInformations;


printArrayNames();

window.addEventListener("load", () => {
  document.querySelector("#user-profile").addEventListener("click", e => {
    highligthMenuProfile(1);
    highligthMenuRepo(0);
      userInformations()
  });
});

window.addEventListener("load", () => {
  document.querySelector("#user-repositories").addEventListener("click", e => {
      // alert('response'); 
      deleteRepo();
      // buscarDadosNaApi()
      highligthMenuProfile(0);
    highligthMenuRepo(1);
      checarUsuarioExisteAPI();
      // userInformations(response);
      // Can also cancel the event and manually navigate
      // e.preventDefault();
      // window.location = e.target.href;
  });
});



function saveToStorage() {
  localStorage.setItem('list_names', JSON.stringify(name));
}
