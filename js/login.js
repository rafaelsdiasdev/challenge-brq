const senha = "123456";

const inputEmail = document.getElementById('email');
inputEmail.addEventListener('input', () => {
    const valorDoEmail = inputEmail.value;

    console.log('Email digitado:', valorDoEmail);
});

const inputSenha = document.getElementById('password');
inputSenha.addEventListener('input', () => {
    const valorDaSenha = inputSenha.value;

    console.log('Senha digitada:', valorDaSenha);
});

const botaoLogin = document.getElementById('loginButton');
console.log(botaoLogin);
botaoLogin.addEventListener('click', (event) => {
    event.preventDefault();

    if(inputSenha.value === senha) {
        alert('Login realizado com sucesso!');
    } else {
        alert('Senha incorreta!');
    }
});