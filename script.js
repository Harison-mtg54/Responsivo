window.onload = function() {
    // Verifica se o usuário está logado e na página de login
    if (window.location.pathname.endsWith("login.html")) {
        if (localStorage.getItem('loggedIn')) {
            // Redireciona se o usuário já estiver logado
            window.location.replace("index.html");
        } else {
            // Exibe o formulário de login corretamente
            document.getElementById('login-form').style.display = 'block';
            document.getElementById('register-form').style.display = 'none';
        }
    } else if (window.location.pathname.endsWith("index.html")) {
        // Se tentar acessar index sem estar logado, redireciona para a tela de login
        if (!localStorage.getItem('loggedIn')) {
            window.location.replace("login.html");
        }
    }
};

// Função para tratar o formulário de login
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "usuario@dominio.com" && password === "senha123") {
        localStorage.setItem('loggedIn', 'true'); // Marca o usuário como logado
        window.location.replace("index.html");
    } else {
        alert("Email ou senha incorretos!");
    }
});

// Lógica para alternar entre os formulários de login e cadastro
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

// Função logout
function logout() {
    localStorage.removeItem('loggedIn'); // Remove a chave loggedIn
    alert('Você foi deslogado com sucesso!');
    window.location.replace("login.html"); // Redireciona sem armazenar no histórico
}
