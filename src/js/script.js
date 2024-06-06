function addRegister() {
    const nome = document.getElementById('nome')
    const sobrenome = document.getElementById('sobrenome')
    const email = document.getElementById('email')

    if((nome.value !== '') && (sobrenome.value !== '') && (email.value !== '')) {
        alert('Login successful')
    } else {
        alert('Login failed')
    }
}