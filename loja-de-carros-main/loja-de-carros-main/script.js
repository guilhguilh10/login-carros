// 1. Capturamos os elementos do HTML pelo ID
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const resultado = document.getElementById("resultado");
const botaoEnviar = document.getElementById("enviar");

// 2. Evento de clique no botão "Entrar"
botaoEnviar.addEventListener("click", function(event) {
    event.preventDefault(); // Impede a página de recarregar

    // 3. Pegamos os valores digitados pelo usuário
    const nomeUsuario = usuario.value;
    const senhaDigitada = senha.value;

    // 4. Validação: verifica se algum campo ficou vazio
    if (nomeUsuario === "" || senhaDigitada === "") {
        resultado.textContent = "Por favor, preencha todos os campos!";
        resultado.style.color = "#ff4d4d"; // Vermelho
        return;
    }

    // 5. Verificação das credenciais (aluno / 2026)
    if (nomeUsuario === "aluno" && senhaDigitada === "2026") {
        // --- Teste 1: Login Correto e Senha Correta ---
        resultado.textContent = "Bem-vindo ao sistema!";
        resultado.style.color = "#00b09b"; // Verde
        alert("Bem-vindo ao sistema!");
    } else {
        // --- Testes de Erro: Usuário/Senha Incorretos ---
        resultado.textContent = "Acesso negado!";
        resultado.style.color = "#ff4d4d"; // Vermelho
        alert("Acesso negado!");
    }

    console.log(`Tentativa de Login - Usuário: ${nomeUsuario}`);
});