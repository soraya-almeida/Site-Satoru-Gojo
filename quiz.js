document.getElementById("meubotao").addEventListener("click", function() {
    // Respostas corretas
    const respostasCorretas = {
        pergunta1: "b",
        pergunta2: "c",
        pergunta3: "c",
        pergunta4: "c",
        pergunta5: "d",
        pergunta6: "c",
        pergunta7: "a",
        pergunta8: "b",
        pergunta9: "b",
        pergunta10: "a"
    };

    // Contador de acertos
    let acertos = 0;

    // Loop para verificar respostas
    for (const [pergunta, respostaCorreta] of Object.entries(respostasCorretas)) {
        const respostaUsuario = document.querySelector(`input[name="${pergunta}"]:checked`);
        if (respostaUsuario && respostaUsuario.id === respostaCorreta) {
            acertos++;
        }
    }

    // Exibir resultado com base na pontuação
    let mensagemResultado = "";
    if (acertos >= 8) {
        mensagemResultado = "Você é praticamente tão poderoso quanto Gojo! 💥";
    } else if (acertos >= 5) {
        mensagemResultado = "Muito bom! Você conhece bem o mago dos Seis Olhos. 🔥";
    } else {
        mensagemResultado = "Parece que você precisa assistir Jujutsu Kaisen de novo... mas Gojo te perdoa! 😎";
    }

    alert(`Você acertou ${acertos} de 10 perguntas. ${mensagemResultado}`);
});

