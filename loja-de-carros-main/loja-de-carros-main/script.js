
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const botaocadastrar = document.getElementById("enviar");
const resultado = document.getElementById("resultado");

botaocadastrar.addEventListener("click", function(event) {
    event.preventDefault(); 

    const nomeusuario = usuario.value;
    const senhausuario = senha.value;

    console.log(nomeusuario, senhausuario);

    if (nomeusuario === "" || senhausuario === "") {
        alert("Preencha todos os campos!");
        resultado.textContent = "Preencha todos os campos!";
        resultado.style.color = "#ff4d4d";
        return;
    }

    if (nomeusuario === "aluno" && senhausuario === "2026") {
        alert("Bem-vindo ao sistema!");
        resultado.textContent = "Bem-vindo ao sistema!";
        resultado.style.color = "#00b09b";
    } else {
        alert("Acesso negado!");
        resultado.textContent = "Acesso negado!";
        resultado.style.color = "#ff4d4d";
    }
});
