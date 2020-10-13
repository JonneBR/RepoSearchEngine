const inputUser = document.getElementById('user');
const buttonAdd = document.getElementById('btn-add');
const buttonDelete = document.getElementById('btn-delete');
const menuContainer = document.getElementsByClassName('menu-container');
const userProfile = document.getElementById('user-profile');

const userRepositories = document.getElementById('user-repositories');
console.log("user", userProfile);

console.log('button', buttonAdd);
console.log('buttonDelete', buttonDelete);

const name = JSON.parse(localStorage.getItem('list_names')) || [];

const userProfileData = JSON.parse(localStorage.getItem('list_names')) || [];


console.log('NAME', name);

function getMenuHiddenOrVisible(array) {
  array > 0 ? menuContainer[0].style.visibility = 'visible' : menuContainer[0].style.visibility = 'hidden'; 
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
  if (name.length > 0) {
    for (var i = 0; i < 1; i++) {
      var img = document.createElement('img');
      img.src = name[i];
      document.getElementById('lista').appendChild(img);
     
    }
    for (var i = 1; i < name.length; i++) {
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


function buscarDadosNaApi() {
  var inputUserNameToLower = inputUser.value.toLowerCase();

  axios
    .get('https://api.github.com/users/' + inputUserNameToLower)
    .then(function (response) {
      
      var apiUserNameToLower = response.data.login.toLowerCase();
      // var profileImage = response.data.avatar_url;
      var userUrl = response.data.html_url;
      console.log(userUrl);

      if (inputUserNameToLower === apiUserNameToLower) {
        // repoUser = response.data.repos_url;
        acessarRepo(response);
        
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

buttonAdd.onclick = buscarDadosNaApi;
buttonDelete.onclick = deleteRepo;
// userProfile.onclick = userInformations;


printArrayNames();

window.addEventListener("load", () => {
  document.querySelector("#user-profile").addEventListener("click", e => {
      // alert('response');
      userInformations()
      // userInformations(response);
      // Can also cancel the event and manually navigate
      // e.preventDefault();
      // window.location = e.target.href;
  });
});

window.addEventListener("load", () => {
  document.querySelector("#user-repositories").addEventListener("click", e => {
      // alert('response'); 
      deleteRepo();
      buscarDadosNaApi()
      // userInformations(response);
      // Can also cancel the event and manually navigate
      // e.preventDefault();
      // window.location = e.target.href;
  });
});



function saveToStorage() {
  localStorage.setItem('list_names', JSON.stringify(name));
}
