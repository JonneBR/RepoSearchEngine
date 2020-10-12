function userInformations(response){
    var profileImage = response.data.avatar_url;
    var userName = response.data.name;
    var userLocation = response.data.location;
    var userCompany = response.data.company;
    var userBio = response.data.bio;
    console.log('teste exertnal',response.data);

}