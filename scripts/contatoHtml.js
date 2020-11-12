class UserInformations{
    constructor(){
        this.btnSubmit = document.getElementById("btnSubmit");
        this.nameForm = document.getElementById("nameForm");
        this.emailForm = document.getElementById("emailForm");
        this.commentForm = document.getElementById("comment-form");

        this.formSubmit();
    }


    formSubmit(){
        this.btnSubmit.onclick = event => {
            this.infoValidation(event);
        }
    }


    infoValidation(event){
        if(this.nameForm.value === ''){
            event.preventDefault();
        
        }else{

        }
    }
}

new UserInformations();

// console.log(btnSubmit);
// console.log(nameForm);