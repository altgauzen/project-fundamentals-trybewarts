

function alerta() {

    let emailInserido = document.getElementById('campoEmail').value;
    let senhaInserida = document.getElementById('campoSenha').value;
    let emailCerto = 'tryber@teste.com' 
    let senhaCerta = '123456'
   
    if ( emailInserido === emailCerto && senhaInserida === senhaCerta ) {
            alert('Olá, Tryber!')

    } else {
        alert('Login ou senha inválidos.');

    }
    

}
