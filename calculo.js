function calcularTensao() {
    var corrente = parseFloat(document.getElementById('corrente1').value);
    var resistencia = parseFloat(document.getElementById('resistencia1').value);
    if (!isNaN(corrente) && !isNaN(resistencia)) {
        var tensao = corrente * resistencia;
        document.getElementById('resultado-tensao').innerText = 'Resultado: ' + tensao + ' V';
    } else {
        document.getElementById('resultado-tensao').innerText = 'Por favor, insira valores válidos.';
    }
}

function calcularResistencia() {
    var tensao = parseFloat(document.getElementById('tensao2').value);
    var corrente = parseFloat(document.getElementById('corrente2').value);
    if (!isNaN(tensao) && !isNaN(corrente)) {
        var resistencia = tensao / corrente;
        document.getElementById('resultado-resistencia').innerText = 'Resultado: ' + resistencia + 'Ω';
    } else {
        document.getElementById('resultado-resistencia').innerText = 'Por favor, insira valores válidos.';
    }
}

function calcularCorrente() {
    var tensao = parseFloat(document.getElementById('tensao3').value);
    var resistencia = parseFloat(document.getElementById('resistencia3').value);
    if (!isNaN(tensao) && !isNaN(resistencia)) {
        var corrente = tensao / resistencia;
        document.getElementById('resultado-corrente').innerText = 'Resultado: ' + corrente + 'A';
    } else {
        document.getElementById('resultado-corrente').innerText = 'Por favor, insira valores válidos.';
    }
}
