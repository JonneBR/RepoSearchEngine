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
            this.infoValidationNameField(event);
        }
    }


    infoValidationNameField(event){
        if(this.nameForm.value.length === 0 ){
            event.preventDefault();
                this.emptyInputErrorMessage(this.nameForm,`Campo não pode estar vazio!`)
        } else if(this.nameForm.value.length >= 1 && this.nameForm.value.length <= 3 ){
            event.preventDefault();
                this.emptyInputErrorMessage(this.nameForm,`Campo requer mais de 3 caracteres`)
        } 
        else{
            this.CorrectMessage(this.nameForm);
            // event.preventDefault();
        }
    }
    // infoValidationEmailField(){
    //     if(this.emailForm.value.length <= '' ){
    //         event.preventDefault();
    //             this.emptyInputErrorMessage(this.emailForm,`Campo não pode estar vazio!`)
    //     }
    // }

    emptyInputErrorMessage(form,errorMessage){
        const formControl = form.parentElement;
        
        formControl.querySelector("input").style.border = "1px solid red";
        formControl.querySelector("small").style.visibility = 'visible';
        formControl.querySelector("small").innerText = errorMessage;
    }

    CorrectMessage(form){
        const formControl = form.parentElement;
        
        formControl.querySelector("input").style.border = "1px solid green";
        formControl.querySelector("small").style.visibility = 'hidden';
        
    }
}

new UserInformations();

// console.log(btnSubmit);
// console.log(nameForm);