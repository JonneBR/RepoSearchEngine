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
        var p = document.createElement('p');
        
        p.innerHTML = info + responseInformation;
        addNameArray(p.innerHTML);
        getMenuHiddenOrVisible(p.innerHTML);
        lista.appendChild(p);
        menuContainer[0].style.visibility = 'visible';
        // console.log("??", responseInformation);
      

}