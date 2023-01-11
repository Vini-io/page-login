

// mover display (ENTRAR) para (CADASTRE-SE) ou vice versa //

function btShowLoginRegister(key) {

    let displayLogin = document.querySelector(".display-login")
    let displayRegister = document.querySelector(".display-register")



    if (key == 0) {

        displayLogin.style.right = "0px"
        displayLogin.style.left = "0px"
        displayRegister.style.left = "505px"

    } else {

        displayRegister.style.right = "0px"
        displayRegister.style.left = "0px"
        displayLogin.style.left = "-505px"

    }


}


// Move nome do place dos input //

function movePlaceSin(place) {
    let move = document.querySelector(place)
    move.style.top = "-17px"
    move.style.left = "0px"
    move.style.color = 'rgb(72, 109, 244)'

}

function movePlaceOut(place, event) {
    let move = document.querySelector(place)
    if (event.value == "") {
        move.style.top = "10px"
        move.style.left = "10px"

    }
    move.style.color = 'rgba(0, 0, 0, 0.8)'

}




//Mostrar e ocultar senha (LOGIN)


function viewPasswordLogin() {


    let LoginPasswordShow = document.getElementById("showPassword")
    let mostrarLogin = document.querySelector(".mostrar-login")
    let ocultarLogin = document.querySelector(".ocultar-login")

    if (LoginPasswordShow.type == "password") {
        mostrarLogin.style.display = "none"
        ocultarLogin.style.display = "inherit"
        LoginPasswordShow.type = "text"

    } else {
        ocultarLogin.style.display = "none"
        mostrarLogin.style.display = "inherit"
        LoginPasswordShow.type = "password"

    }


}

//Mostrar e ocultar senha (REGISTER)




function viewPasswordRegister() {
    let RegisterPasswordShow = document.querySelectorAll(".showPasswordRegister")
    let mostrarRegister = document.querySelector(".mostrar-register")
    let ocultarRegister = document.querySelector(".ocultar-register")


    for (let i = 0; i < RegisterPasswordShow.length; i++) {

        if (RegisterPasswordShow[i].type == "password") {
            ocultarRegister.style.display = "inherit"
            mostrarRegister.style.display = "none"
            RegisterPasswordShow[i].type = "text";

        } else {
            ocultarRegister.style.display = "none"
            mostrarRegister.style.display = "inherit"
            RegisterPasswordShow[i].type = "password"

        }
    }






}




