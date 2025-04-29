const numAleatorio = Math.floor(Math.random() * 11);

document.getElementById("numAleatorio").addEventListener("click", function () {
    const campoTexto = document.getElementById("campoTexto").value;
    const numeroSortido = document.getElementById("numeroSortido");

    const numeroUsuario = parseInt(campoTexto, 10);

    
    if (isNaN(numeroUsuario)) {
        numeroSortido.textContent = "Por favor, insira um número válido.";
        return;
    }

    if (numeroUsuario === numAleatorio) {
        numeroSortido.textContent = "Parabéns! Você acertou!";
    } else if (numeroUsuario < numAleatorio) {
        numeroSortido.textContent = "O número é maior.";
    } else {
        numeroSortido.textContent = "O número é menor.";
    }
});