var sectionFormulario = document.getElementById('sectionFormulario');
var visualizarPoster  = document.getElementById('visualizarPoster');
var previaPoster      = document.getElementById('previaPoster');
var linkPoster        = document.getElementById('linkPoster');
var tituloFilme       = document.getElementById('tituloFilme');
var anoLancamento     = document.getElementById('anoLancamento');
var descricaoFilme    = document.getElementById('descricaoFilme')
var categorias        = document.getElementById('categorias')
var checaImagem       = false;
var nomeDivs          = ["Ação", "Romance", "Drama", "Fantasia", "Terror"]

function enviarFilme(){
    if(verificaFormato()){
        nomeDivs.forEach(function(cat){
            if(cat === categorias.value){
                mostraFilmeNaTela(cat)
            }
        })
    }
}

function mostraFilmeNaTela(nomeCategoria){
    var divCard = document.getElementById(nomeCategoria);
    var filmeAdicionado = "";

    filmeAdicionado = `
    <div class="flip-card">
        <div class="flip-card-inner">
        <div class="flip-card-front">
            <img src="${linkPoster.value}" alt="Avatar" style="width:300px;height:300px;">
        </div>
        <div class="flip-card-back">
            <h1>${tituloFilme.value}</h1>
            <p>${anoLancamento.value}</p>
            <p>${descricaoFilme.value}</p>
        </div>
        </div>
    </div>
    `
    divCard.innerHTML += filmeAdicionado;
    sectionFormulario.style.display = 'none'
}


function addFilme(){
    sectionFormulario.style.display = 'block'
}

function visualizarPrevia() {
    if (verificaFormato()) {
        linkImagem = `<img src="${linkPoster.value}" class="previaPoster">`
        previaPoster.innerHTML = linkImagem
    }
}

function verificaFormato() {
    if (linkPoster.value.endsWith('.jpg')) {
        return true;
    } else {
        alert('Insira uma imagem com formato .jpg')
    }
}

function addCard(nomeCategoria){
    nomeCategoria.innerHTML +=  `<div class="flip-card">
        <div class="flip-card-inner">
        <div class="flip-card-front">
            <img src="${linkPoster.value}" alt="Avatar" style="width:300px;height:300px;">
        </div>
        <div class="flip-card-back">
            <h1>${tituloFilme.value}</h1>
            <p>${anoLancamento.value}</p>
            <p>${descricaoFilme.value}</p>
        </div>
        </div>
        </div>`

    sectionFormulario.style.display = 'none'
}

function fecharBotao(){
    sectionFormulario.style.display = 'none'
}