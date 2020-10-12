// function printData (response){
//     var repoUser = response.data.repos_url;
//     var profileImage = response.data.avatar_url;
//     axios
//     .get(repoUser)
//     .then(function (response) {
//       var objLength = response.data.length;
//       console.log('data',response.data);
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



