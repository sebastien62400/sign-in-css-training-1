const password = document.getElementById("password-input")
const eye = document.getElementById("eye-open")

function showPassword(){
    if (password.type === 'password'){
        password.setAttribute('type', 'text');
        eye.setAttribute('name', 'eye-off-outline')
    } else {
        password.setAttribute('type', 'password')
        eye.setAttribute('name', 'eye-outline')
    }
}