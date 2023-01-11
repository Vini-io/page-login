


function createConta() {

    let createEmail = document.querySelector(".createEmail").value
    let createPassword = document.querySelector(".registerPassword").value;
    let passwordConfirm = document.querySelector(".confirmPassword").value;

    let errorConfirmPasswordText = document.querySelector(".errorConfirmPasswordText")
    let error6caract = document.querySelector(".error6caract")
    let textEmailErr = document.querySelector(".textEmailErr")
    let textEmailErrForm = document.querySelector(".textEmailErrForm")
    
    textEmailErr.style.display = "none"
    error6caract.style.display = "none"
    errorConfirmPasswordText.style.display = "none"
    textEmailErrForm.style.display = "none"


    if (createPassword == passwordConfirm) {
        auth.createUserWithEmailAndPassword(createEmail, createPassword).then(doc=>{
            db.collection("user").doc(doc.user.uid).set({
                email: createEmail,
                senha: createPassword
            }).catch(error=>{
                console.log(error)
            })

        }).catch(error => {
            console.log(error)
            if(error.code == 'auth/weak-password'){
                error6caract.style.display = "inherit"
            }
            if (error.code == 'auth/email-already-in-use') {
                textEmailErr.style.display = "inherit"
            }
            if(error.code == 'auth/invalid-email'){
                textEmailErrForm.style.display = "inherit"
            }

        })
    }else{
        errorConfirmPasswordText.style.display = "inherit"
    }




}



