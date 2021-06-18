function loginVerify() {
  const emailInserido = document.getElementById('campoEmail').value;
  const senhaInserida = document.getElementById('campoSenha').value;
  const emailCerto = 'tryber@teste.com';
  const senhaCerta = '123456';
  if (emailInserido === emailCerto && senhaInserida === senhaCerta) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const botao = document.getElementById('botao');
botao.addEventListener('click', loginVerify);
