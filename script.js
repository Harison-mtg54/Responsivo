// Verifica se o usuário já está logado no localStorage
window.onload = function() {
    if (localStorage.getItem('loggedIn')) {
        // Se estiver logado, redireciona para a página principal
        window.location.href = "index.html";
    } else {
        // Se não estiver logado, exibe a tela de login
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('register-form').style.display = 'none';
    }
};

// Função para tratar o formulário de login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "usuario@dominio.com" && password === "senha123") {
        localStorage.setItem('loggedIn', 'true'); // Marca o usuário como logado
        window.location.href = "index.html";
    } else {
        alert("Email ou senha incorretos!");
    }
});

// Lógica para alternar entre os formulários de login e cadastro
document.getElementById('show-register').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
});

// Função logout
function logout() {
    localStorage.removeItem('loggedIn'); // Remove a chave loggedIn
    alert('Você foi deslogado com sucesso!');
    window.location.href = "login.html"; // Redireciona para a tela de login
}

// Garante que a função logout funcione apenas se o usuário estiver logado
if (!localStorage.getItem('loggedIn')) {
    window.location.href = "login.html";
}
