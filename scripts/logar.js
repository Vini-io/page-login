

function veryUsername() {
    let email = document.querySelector(".email-login").value;
    let password = document.querySelector(".password-login").value;


    auth.signInWithEmailAndPassword(email, password).then(user => {
        alert("Usuario logado: " + auth.currentUser.uid)
    }).catch(error => {
        console.log(error)
    })

}

auth.onAuthStateChanged((user) => {
    if (user) {
        console.log("Usuario logado codigo: " + auth.currentUser.uid)

    } else {
        console.log("Ninguem logado")
    }
})


function signOut() {
    auth.signOut().then().catch(error => {
        console.log(error)
    })
}

// signOut()