const inputUser = document.getElementById('user');
const buttonAdd = document.getElementById('btn-add');
const buttonDelete = document.getElementById('btn-delete');
const menuContainer = document.getElementsByClassName('menu-container');
const userProfile = document.getElementById('user-profile');
const urlAPI = 'https://api.github.com/users/';
const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
console.log(closeMenu);

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
  // mainMenu.style.background = 'red';
}
function close(){
  mainMenu.style.display = 'none';
  // mainMenu.style.background = 'red';
}

function show(){
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
  // mainMenu.style.background = 'red';
}

const userRepositories = document.getElementById('user-repositories');

const userContact = document.getElementById('user-contact');

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

function appendImageToPrint(){
  var img = document.createElement('img');
  img.src = name[0];
  document.getElementById('lista').appendChild(img);
}

function gettingUserDataFromArray(i){
  for (i; i < name.length; i++) { // bug of image and Name is here
    var lista = document.getElementById('lista');
    var li = document.createElement('li');
    li.innerHTML = name[i];
    lista.appendChild(li);
  }
}

function printUserInformations() {
  // name.length > 5 ? highligthMenuRepo(0) : highligthMenuProfile(1); // Highligth menu
  
  if (name.length > 0 && name.length <= 4) {
    var i = 1;
    appendImageToPrint();
    gettingUserDataFromArray(i);
    console.log("ENTRANDO??");
  }else if(name.length > 0 && name.length > 3){
    var i = 0;
    gettingUserDataFromArray(i);

  }
  getMenuHiddenOrVisible(name.length);
}

async function checarUsuarioExisteAPI() {
 
  axios.get(urlAPI + inputUser.value.toLowerCase())
  .then(function (response) {
      if (inputUser.value.toLowerCase() === response.data.login.toLowerCase()) {
        getMenuHiddenOrVisible(1);
        // repoUser = response.data.repos_url;
        PegarDadosNaAPI(response);
       
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


printUserInformations();

window.addEventListener("load", () => {
  document.querySelector("#user-profile").addEventListener("click", e => {
    highligthMenuProfile(1);
    highligthMenuRepo(0);
      userInformations();
  });
});

window.addEventListener("load", () => {
  document.querySelector("#user-repositories").addEventListener("click", e => {
      deleteRepo();
      highligthMenuProfile(0);
      highligthMenuRepo(1);
      checarUsuarioExisteAPI();
     
  });
});

window.addEventListener("load", () => {
  document.querySelector("#user-contact").addEventListener("click", e => {
      highligthMenuProfile(0);
      highligthMenuRepo(1);
      contactInformations();
  });
});



function saveToStorage() {
  localStorage.setItem('list_names', JSON.stringify(name));
}
