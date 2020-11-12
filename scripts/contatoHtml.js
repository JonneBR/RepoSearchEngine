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
        if(this.nameForm.value === '' ){
            event.preventDefault();
                this.emptyInputErrorMessage(this.nameForm,`Campo não pode estar vazio!`)
        }else{

        }
    }

    emptyInputErrorMessage(form,errorMessage){
        const formControl = form.parentElement;
        
        formControl.querySelector("input").style.border = "1px solid red";
        formControl.querySelector("small").style.visibility = 'visible';
        formControl.querySelector("small").innerText = errorMessage;
    }
}

new UserInformations();

// console.log(btnSubmit);
// console.log(nameForm);