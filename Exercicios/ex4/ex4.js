const confirmButton = document.getElementById("confirmChoice");

confirmButton.addEventListener("click", () => {
    const mage = document.getElementById("mage");
    const warrior = document.getElementById("warrior");
    const archer = document.getElementById("archer");
    const body = document.body;
    const message = document.createElement("p");
    
    if (mage.checked) {
    message.textContent = "Você escolheu ser um Mago! prepare-se para lançar feitiços"
    } else if (warrior.checked) {
    message.textContent ="Você escolheu ser um Guerreiro! prepare-se para batalhas epicas!"
    } else if (archer.checked) {
    message.textContent ="Você escolheu ser um Arqueiro! prepare-se para acertar alvos distantes!"
    } else {
    message.textContent = "por favor escolha um guerreiro!"
    }

    body.appendChild(message)
})


