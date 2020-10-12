function acessarRepo(repoUser, profileImage) {
    var carregando = document.getElementById('carregando');
    if (carregando && carregando.length) carregando.outerHTML = '';
    var lista = document.getElementById('lista');
    var lista_html = lista.innerHTML;
    lista.innerHTML = '<li id="carregando">Carregando...</li>';
  
    axios
      .get(repoUser)
      .then(function (response) {
        var objLength = response.data.length;
        console.log(response.data);
        lista.innerHTML = lista_html;
      
  
        var img = document.createElement('img');
        img.src = profileImage;
        document.getElementById('lista').appendChild(img);
        addNameArray(profileImage);
  
        for (var i = 0; i < objLength; i++) {
          var li = document.createElement('li');
  
          li.innerHTML = response.data[i].name;
          addNameArray(li.innerHTML);
          getMenuHiddenOrVisible(li.innerHTML);
          lista.appendChild(li);
          menuContainer[0].style.visibility = 'visible';
        }
      })
      .catch(function (error) {
        console.warn(error);
      });
  }