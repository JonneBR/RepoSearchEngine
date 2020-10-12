function userInformations(response){
    var profileImage = response.data.avatar_url;
    var userName = response.data.name;
    var userLocation = response.data.location;
    var userCompany = response.data.company;
    var userBio = response.data.bio;
    console.log('teste exertnal',response.data);
    saveData(profileImage);
    saveData(userName);
    saveData(userLocation);
    saveData(userCompany);
    saveData(userBio);
   
   

}

function saveData(responseInformation){

    for (var i = 0; i < 5; i++) {
        var li = document.createElement('li');

        li.innerHTML = responseInformation;
        addNameArray(li.innerHTML);
        getMenuHiddenOrVisible(li.innerHTML);
        lista.appendChild(li);
        menuContainer[0].style.visibility = 'visible';
        console.log("??", responseInformation);
      }

}