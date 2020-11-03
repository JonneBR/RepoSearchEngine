function userInformations(){
    deleteRepo();
    var inputUserNameToLower = inputUser.value.toLowerCase();

  axios
    .get('https://api.github.com/users/' + inputUserNameToLower)
    .then(function (response) {
      
      var apiUserNameToLower = response.data.login.toLowerCase();
      // var profileImage = response.data.avatar_url;
      var userUrl = response.data.html_url;
      console.log(userUrl);

    var profileImage = response.data.avatar_url;
    var userName = response.data.name;
    var userLocation = response.data.location;
    var userCompany = response.data.company;
    var userBio = response.data.bio;
    // console.log('teste exertnal',response.data);
    // saveData(profileImage);
    addNameArray(profileImage);
    appendImageToPrint();
    saveData('Nome: ',userName);
    saveData('País: ',userLocation);
    saveData('Empresa: ',userCompany);

      
    })
    .catch(function (error) {
      console.warn(
        error,
        'Não pode fazer a requisição. Usuário pode estár inválido.'
      );
    });


    
    // saveData(userBio);
   
   

}

function saveData(info,responseInformation){
        var li = document.createElement('li');
        
        li.innerHTML = info + responseInformation;
        addNameArray(li.innerHTML);
        getMenuHiddenOrVisible(li.innerHTML);
        lista.appendChild(li);
        menuContainer[0].style.visibility = 'visible';
        // console.log("??", responseInformation);
      

}