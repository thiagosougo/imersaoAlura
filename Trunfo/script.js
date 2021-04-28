var cartaAang = {
    nome: "Aang",
    imagem: "http://static1.squarespace.com/static/58b866f417bffc4dc469acab/5c9acb3fe4966be5c1f68547/5f054ce972537227a9e10779/1594250620977/is-avatar-the-last-airbender-animated-nick-series-on-netflix.jpg?format=1500w",
    atributos: {
        ataque: 80,
        defesa: 60,
        dobra: 90
    }
}

var cartaZuko = {
    nome: "Zuko",
    imagem: "https://static.wikia.nocookie.net/awatar/images/4/4b/Zuko.png/revision/latest/top-crop/width/360/height/450?cb=20210303024539",
    atributos: {
        ataque: 70,
        defesa: 65,
        dobra: 85
    }
}

var cartaAzula = {
    nome: "Azula",
    imagem: "https://static.wikia.nocookie.net/avatar/images/1/12/Azula.png/revision/latest/top-crop/width/360/height/450?cb=20141020182710&path-prefix=pt-br",
    atributos: {
        ataque: 88,
        defesa: 90,
        dobra: 95
    }
}

var cartaIroh = {
    nome: "Iroh",
    imagem: "https://media.comicbook.com/2020/06/uncle-iroh-avatar-1223074-1280x0.jpeg",
    atributos: {
        ataque: 40,
        defesa: 80,
        dobra: 80
    }
}

var cartaOzai = {
    nome: "Ozai",
    imagem: "https://pbs.twimg.com/media/EYuvy2IXYAAKDXP.jpg",
    atributos: {
        ataque: 90,
        defesa: 80,
        dobra: 95
    }
}

var cartaKatara = {
    nome: "Katara",
    imagem: "https://static.wikia.nocookie.net/avatar/images/a/ae/Katara_angry.png/revision/latest/top-crop/width/360/height/450?cb=20180201153043&path-prefix=pt-br",
    atributos: {
        ataque: 60,
        defesa: 80,
        dobra: 80
    }
}

var cartaToph = {
    nome: "Toph",
    imagem: "https://static.wikia.nocookie.net/avatar/images/4/46/Toph_Beifong.png/revision/latest?cb=20141021174750&path-prefix=pt-br",
    atributos: {
        ataque: 95,
        defesa: 90,
        dobra: 100
    }
}

var cartaKorra = {
    nome: "Korra",
    imagem: "https://images.huffingtonpost.com/2014-09-06-korra-thumb.jpg",
    atributos: {
        ataque: 60,
        defesa: 70,
        dobra: 70
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaAang, cartaZuko, cartaAzula, cartaIroh, cartaOzai, cartaKatara, cartaToph, cartaKorra]
//            0           1           2          3         4            5            6           7     

var pontosJogador = 0
var pontosMaquina = 0
atualizaQuantidadeCartas()


function atualizaQuantidadeCartas(){
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length

    divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar(){
    var divPlacar = document.getElementById('placar');
    var html = "Jogador " + pontosJogador + " | " + pontosMaquina + " Máquina"

    divPlacar.innerHTML = html
}

function sortearCarta(){

    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    var $cartaTelaInicial = document.getElementById('cartaTelaInicial');
    $cartaTelaInicial.style.display = 'none'

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    if(cartas.length == 0){
        alert('Fim do jogo!');
        if(pontosJogador > pontosMaquina){
            htmlResultado = '<p class="resultado-final">Venceu</p>'
        } else if(pontosMaquina > pontosJogador){
            htmlResultado = '<p class="resultado-final">Perdeu</p>'
        } else{
            htmlResultado = '<p class="resultado-final">Empate!</p>'
        }
    } else{
        document.getElementById('btnProximaRodada').disabled = false
    }

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true

    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada(){
    var divCartas = document.getElementById('cartas')

    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true

    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""

}