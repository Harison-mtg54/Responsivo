// Verifica se o usuário já está logado no localStorage ao carregar a página
window.onload = function() {
    if (localStorage.getItem('loggedIn')) {
        // Se estiver logado, redireciona para a página principal
        window.location.href = "index.html";
    } else {
        // Se não estiver logado, exibe a tela de login
        if (document.getElementById('login-form')) {
            document.getElementById('login-form').style.display = 'block';
        }
        if (document.getElementById('register-form')) {
            document.getElementById('register-form').style.display = 'none';
        }
    }
};

// Função para tratar o formulário de login
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "usuario@dominio.com" && password === "senha123") {
        // Usuário logado com sucesso
        localStorage.setItem('loggedIn', 'true');
        window.location.href = "index.html";
    } else {
        alert("Email ou senha incorretos!");
    }
});

// Alterna entre os formulários de login e cadastro
document.getElementById('show-register')?.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

document.getElementById('show-login')?.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
});

// Função para logout
function logout() {
    // Remove chave de sessão
    localStorage.removeItem('loggedIn');

    // Alerta de logout bem-sucedido
    alert('Você foi deslogado com sucesso!');

    // Redireciona para a página de login
    window.location.href = "login.html";
}
