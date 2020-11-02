function PegarDadosNaAPI(response) {
    console.log('RETURN', response);
    var profileImage = response.data.avatar_url;
    console.log(profileImage);
    var lista = document.getElementById('lista');
    
  
    axios
      .get(response.data.repos_url)
      .then(function (response) {
        var objLength = response.data.length;
        console.log('data',objLength);  
        var img = document.createElement('img');
        img.src = profileImage;
        document.getElementById('lista').appendChild(img);
        addNameArray(profileImage);
        printarDadosDoRepositorio(objLength,lista,response);
        
      })
      .catch(function (error) {
        console.warn(error);
      });
  }

  function printarDadosDoRepositorio(objLength,lista,response){

    for (var i = 0; i < objLength; i++) {
      var li = document.createElement('li');

      li.innerHTML = response.data[i].name;
      addNameArray(li.innerHTML);
      getMenuHiddenOrVisible(li.innerHTML);
      lista.appendChild(li);
      menuContainer[0].style.visibility = 'visible';
    }

  }