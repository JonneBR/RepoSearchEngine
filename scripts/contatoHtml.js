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
            this.arrayReturns = [this.infoValidationNameField(event), this.infoValidationEmailField(event),this.infoValidationCommentField(event)]
            this.validator = this.arrayReturns.every(item => item === true)
            if(this.validator === true)
                alert("Mensagem enviada com sucesso!")
            else
                event.preventDefault();
        }
        
    }


    infoValidationNameField(event){
        if(this.nameForm.value.length === 0 ){
                this.emptyInputErrorMessage(this.nameForm,`Campo não pode estar vazio!`)
        } else if(this.nameForm.value.length >= 1 && this.nameForm.value.length <= 3 ){
                this.emptyInputErrorMessage(this.nameForm,`Campo requer mais de 3 caracteres`)
        } 
        else{
            this.CorrectMessage(this.nameForm);
            return true;
        }
    }
    infoValidationEmailField(event){
        const emailValidator = /\S+@\S+/;
        if (emailValidator.test(String(this.emailForm.value).toLocaleLowerCase()) === true) {
            this.CorrectMessage(this.emailForm);
            return true;
        }else if(this.emailForm.value.length === 0){
                this.emptyInputErrorMessage(this.emailForm,`Campo não pode estar vazio!`)
            }else {
                this.emptyInputErrorMessage(this.emailForm, `O Email não corresponde`);
            }
        
    }

    infoValidationCommentField(event){
        if(this.commentForm.value.length > 150 || this.commentForm.value.length === 0 ){
            this.commentForm.parentElement.querySelector("textarea").style.border = "1px solid red";
        }else{
            this.commentForm.parentElement.querySelector("textarea").style.border = "1px solid green";
            return true;
        }

    }

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