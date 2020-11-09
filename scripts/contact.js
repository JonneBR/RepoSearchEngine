// function contactInformations(){
//     deleteRepo();
//     var inputUserNameToLower = inputUser.value.toLowerCase();

//   axios
//     .get('https://api.github.com/users/' + inputUserNameToLower)
//     .then(function (response) {
      
//       var apiUserNameToLower = response.data.login.toLowerCase();
//       // var profileImage = response.data.avatar_url;
//       var userBlog = response.data.blog;
//       var userTwitter = response.data.twitter_username;
//       var userEmail = response.data.email;
//       console.log(userTwitter);

//     saveData('Twitter: ',userTwitter);
//     saveData('Blog: ',userBlog);
//     saveData('Email: ',userEmail);

      
//     })
//     .catch(function (error) {
//       console.warn(
//         error,
//         'Não pode fazer a requisição. Usuário pode estár inválido.'
//       );
//     });
// }
// function saveData(info,responseInformation){
//         var li = document.createElement('li');
        
//         li.innerHTML = info + responseInformation;
//         addNameArray(li.innerHTML);
//         getMenuHiddenOrVisible(li.innerHTML);
//         lista.appendChild(li);
//         menuContainer[0].style.visibility = 'visible';
// }