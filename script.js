// Verifica se o usuário já está logado no localStorage
window.onload = function() {
    if (localStorage.getItem('loggedIn')) {
        // Se estiver logado, redireciona para a página principal
        window.location.href = "index.html"; // Substitua pelo seu arquivo principal
    } else {
        // Se não estiver logado, exibe a tela de login
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('register-form').style.display = 'none';
    }
};

// Função para tratar o formulário de login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Pegando os dados do formulário de login
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validação simples de login (substitua com autenticação real)
    if (email === "usuario@dominio.com" && password === "senha123") {
        // Armazena no localStorage que o usuário está logado
        localStorage.setItem('loggedIn', 'true');
        
        // Redireciona para a página principal após o login bem-sucedido
        window.location.href = "index.html"; // Substitua pelo seu arquivo principal
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
function logout() {
    // Remove a chave loggedIn do localStorage
    localStorage.removeItem('loggedIn');

    // Alerta ao usuário
    alert('Você foi deslogado com sucesso!');

    // Redireciona para a tela de login
    window.location.href = "login.html";
}
