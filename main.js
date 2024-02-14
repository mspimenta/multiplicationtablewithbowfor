function gerarTabuada() {
    const numeroBase = document.getElementById("numero").value;
    const tabuadaDiv = document.getElementById("tabuada");

    if (numeroBase >= 1 && numeroBase <= 10) {
        let tabuada = "<h2>Tabuada do " + numeroBase + "</h2>";
        for (let i = 1; i <= 10; i++) {
            tabuada += numeroBase + " x " + i + " = " + (numeroBase * i) + "<br> <br>";
        }
        tabuadaDiv.innerHTML = tabuada;
    } else {
        tabuadaDiv.innerHTML = "<p>Por favor, insira um número de 1 a 10.</p>";
    }
}

function limparTela() {
    document.getElementById("tabuada").innerHTML = "";
}
