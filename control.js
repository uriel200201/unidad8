const validatePrompt = (msj) => {
    alert(msj)
    return
}

const validarUsuario = () => {
    let user = document.getElementById('user')
    if (user.value == '' || user.value.indexOf('@', 0) == -1) {
        if (user.value == '') {
            validatePrompt('Ingesar un usuario')
        }
        if (user.value.indexOf('@', 0) == -1) {
            validatePrompt('Al usuaria le falta el "@"')
        }
        return (false)
    } else {
        return (true)
    }
}

const validarPass = () => {
    let pass = document.getElementById('pass')
    if (pass.value == '') {
        validatePrompt('Ingrese una contraseña')
        return (false)
    } else{
        return (true)
    }
}

const validarEnviar = () =>{
    if (validarUsuario() == true) {
        if (validarPass() == true) {
            validatePrompt('Todos los campos estan correctos')
        }
    }
}