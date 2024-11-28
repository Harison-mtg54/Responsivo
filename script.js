// Validação do formulário de login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pegando os dados do formulário de login
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulação de login simples (você pode substituir por uma autenticação real)
    if (email === "usuario@dominio.com" && password === "senha123") {
        // Redireciona para o menu principal (index.html)
        window.location.href = "index.html"; // Certifique-se de que "index.html" seja a sua página do menu
    } else {
        alert("Email ou senha incorretos!");
    }
});
