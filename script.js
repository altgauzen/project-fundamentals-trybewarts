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

function checkedInput() {
  if (document.getElementById('agreement').checked) {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
}

const checkInput = document.getElementById('agreement');
checkInput.addEventListener('change', checkedInput);

let textImputed = document.getElementById('textarea');
textImputed.addEventListener('keyup', countText);

function countText() {
  let counterInit = 500;
  let counter = document.getElementById('counter');
  let restantes = counterInit - textImputed.value.length;
  counter.innerHTML = restantes;
}
