//Selecionar ferramenta
var calculadora = document.getElementById('calculadora');
var conversor   = document.getElementById('conversor');
var btnConversor = document.getElementById('btnConversor');
var btnCalculadora = document.getElementById('btnCalculadora');

function visualizaFerramenta(botaoA, botaoB, ferramentaA, ferramentaB){
    botaoA.disabled = false;
    botaoB.disabled = true;
    ferramentaA.style.display = 'none';
    ferramentaB.style.display = 'block';
}

//Calculadora
var operador = "";
var resultadoCalculadora = document.getElementById('resultadoCalculadora');
var contaCalculadora = document.getElementById('contaCalculadora')
function addNum(digito){
    resultadoCalculadora.textContent += digito
}

function addOperador(op){
    if(operador == ""){
        operador = op;
        resultadoCalculadora.textContent += op
    }
}

function total(){
    var valores = resultadoCalculadora.textContent.split(operador)
    if(valores[1] == ""){
        resultadoCalculadora.textContent += '0';
        valores[1] = 0;
    }

    switch(operador){
        case "+":
        contaCalculadora.textContent = resultadoCalculadora.textContent
        resultadoCalculadora.textContent = parseInt(valores[0]) + parseInt(valores[1]);
        
        break;

        case "-":
        contaCalculadora.textContent = resultadoCalculadora.textContent
        resultadoCalculadora.textContent = Number(valores[0] - valores[1]);
        break;

        case "*":
        contaCalculadora.textContent = resultadoCalculadora.textContent
        resultadoCalculadora.textContent = Number(valores[0] * valores[1]);
        break;

        case "/":
        contaCalculadora.textContent = resultadoCalculadora.textContent
        resultadoCalculadora.textContent = Number(valores[0] / valores[1]);
        break;
    }
}

//Conversor
var resultadoConversor = document.getElementById('resultadoConversor');
var contaConversor     = document.getElementById('contaConversor');
var moedaA             = document.getElementById('moedaA');
var moedaB             = document.getElementById('moedaB');
var numero

function addNumConv(digito){
    resultadoConversor.textContent += digito
}

var converte = 1;
function totalConv(){
    numero = resultadoConversor.textContent 
    if(moedaA.value === 'Dólar' && moedaB.value === 'Real'){
        converte = parseFloat(numero * 5.57)
        visualizaResultado();
    } else if(moedaA.value === 'Real' && moedaB.value === 'Dólar'){
        converte = parseFloat(numero / 5.57)
        visualizaResultado();
    } else if(moedaA.value === 'Dólar' && moedaB.value === 'Euro'){
        converte = parseFloat(numero * 0.83)
        visualizaResultado();
    } else if(moedaA.value === 'Euro' && moedaB.value === 'Dólar'){
        converte = parseFloat(numero / 0.83)
        visualizaResultado();
    } else if(moedaA.value === 'Real' && moedaB.value === 'Euro'){
        converte = parseFloat(numero * 0.15)
        visualizaResultado();
    } else if(moedaA.value === 'Euro' && moedaB.value === 'Real'){
        converte = parseFloat(numero / 0.15)
        visualizaResultado();
    }
}

function visualizaResultado(){
    resultadoConversor.textContent = converte.toPrecision(3)
    contaConversor.textContent = numero
}

function apagar(){
    resultadoConversor.textContent   = '';
    contaConversor.textContent       = '';
    resultadoCalculadora.textContent = '';
    contaCalculadora.textContent     = '';
    operador = "";
}