// VARIAVEIS
const area_de_jogo = document.querySelector('.area_de_jogo');
//Criação da matriz que representa o tabuleiro;
const tabuleiro = new Array(6).fill(0).map(() => new Array(7).fill("x"));
const mainM = document.getElementById("princ");
const getContainer = document.querySelector(".container")
const pegarAudio = document.getElementById("som");
const pegarJogadorM = document.getElementById("avatarM");
const pegarJogadorD = document.getElementById("avatarD");
const figcaption = document.getElementById("grr")
figcaption.innerText = "Let's go!"
const pegarBotao = document.getElementById("item");
const pegarLayoult = document.getElementById("troca");
const pegarBotao2 = document.getElementById("itemN");
let verificar;
let esconder = document.querySelector(".hidden")
let jogadorNaruto = document.querySelector(".jogador_um");
let jogadorGaara = document.querySelector(".jogador_dois");

pegarBotao.onclick = () => {
    pegarLayoult.href = "./assets/css/style.css";
    getContainer.style.display = "initial"
    pegarBotao.style.display = "none"
    pegarBotao2.style.display = "none"
    esconder.style.display = "none"
    pegarAudio.src = "./assets/audio/soundtrack.mp3"
}

pegarBotao2.onclick = () => {
    verificar = true;
    pegarLayoult.href = "./assets/css/styleNaruto.css";
    jogadorNaruto.style.display = "initial";
    getContainer.style.display = "initial"
    pegarBotao.style.display = "none"
    pegarBotao2.style.display = "none"
    pegarJogadorM.style.display = "none"
    pegarJogadorD.style.display = "none"
    figcaption.innerText = ""
    bt.map(item => item.src = "./assets/images/layout/shuriken.webp");
    pegarAudio.src = "./assets/audio/My Top 10 Naruto Epic Songs_160k.mp3"
}

//DOM AREA DO GAME
let tabela = [
    ["E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E"],
];

let arr = new Array;


for (let i=0;i<tabuleiro.length;i++) {
    arr.push([]);
}

//Para cada item do array cria uma linha;
for (let i = 0; i < tabela.length; i++) {
   const linha = document.createElement("section");   
   linha.classList.add("linha"); 
   area_de_jogo.appendChild(linha);
//Para cada item na linha cria uma célula;   
    for (let j = 0; j < tabela[i].length; j++) {        
        if(tabela[i][j] == "E") {           
            const item = document.createElement("div");
            item.classList.add("item-na-linha");
            arr[i][j] = item
            linha.appendChild(arr[i][j]);
        }        
    }
}

let verificarPlayer = true;


//Validação das colunas e Players

let btUm = document.querySelector(".area_dos_botoes .botao__um");
btUm.addEventListener("click", () => {
    inserirPlayer(0);
})

let btDois = document.querySelector(".area_dos_botoes .botao__dois");
btDois.addEventListener("click", () => {
    inserirPlayer(1);
})

let btTres = document.querySelector(".area_dos_botoes .botao__tres");
btTres.addEventListener("click", () => {
    inserirPlayer(2);
})

let btQuatro = document.querySelector(".area_dos_botoes .botao__quatro");
btQuatro.addEventListener("click", () => {
    inserirPlayer(3);
})

let btCinco = document.querySelector(".area_dos_botoes .botao__cinco");
btCinco.addEventListener("click", () => {
    inserirPlayer(4);
})

let btSeis = document.querySelector(".area_dos_botoes .botao__seis");
btSeis.addEventListener("click", () => {
    inserirPlayer(5);
})

let btSete = document.querySelector(".area_dos_botoes .botao__sete");
btSete.addEventListener("click", () => {
    inserirPlayer(6);
})

const inserirPlayer = coluna => {
    for (let i=0;i<tabuleiro.length;i++) {
        if (tabuleiro[tabuleiro.length-(i+1)][coluna]==="x" && verificarPlayer===true) {
            corSetadois()
            let jogador = document.createElement("div");
            jogador.classList.add("playerUm");

            if (verificar===true) {
                let naruto = document.createElement("img");
                naruto.classList.add("naruto");
                naruto.src = "./assets/images/layout/GlassPalatableGrouper-size_restricted.webp";
                jogador.appendChild(naruto);
            }

            arr[arr.length-(i+1)][coluna].appendChild(jogador);
            tabuleiro[tabuleiro.length-(i+1)][coluna] = "b";
            verificarPlayer = false;
            pegarJogadorM.src = "./assets/images/chewbacca_mobile.png";
            pegarJogadorD.src = "./assets/images/chewbacca_Desktop.png";
            jogadorGaara.style.display = "initial";
            jogadorNaruto.style.display = "none";
            figcaption.innerText = "Grrrrrr";
            verificaVitoria(coluna, tabuleiro);
            break;
        } else if (tabuleiro[tabuleiro.length-(i+1)][coluna]==="x" && verificarPlayer===false) {
            corSetaUm()
            let jogador = document.createElement("div");
            jogador.classList.add("playerDois");

            if (verificar===true) {
                let gaara = document.createElement("img");
                gaara.classList.add("gaara");
                gaara.src = "./assets/images/layout/gaara.gif";
                jogador.appendChild(gaara);
            }

            arr[arr.length-(i+1)][coluna].appendChild(jogador);
            tabuleiro[tabuleiro.length-(i+1)][coluna] = "g";
            verificarPlayer = true;
            pegarJogadorM.src = "./assets/images/luke_mobile.png";
            pegarJogadorD.src = "./assets/images/luke_desktop.png";
            jogadorNaruto.style.display = "initial";
            jogadorGaara.style.display = "none";
            figcaption.innerText = "Let's go!";
            verificaVitoria(coluna, tabuleiro);
            break;
        }
    } 
}

let contadorUmV = 0, contadorDoisV = 0;
let contadorUmH = 0, contadorDoisH = 0;


function venceu(jogador) {
    bloquearBotoes("adiciona");
    setTimeout(() => {
        const element = document.getElementById("modal");
        element.classList.add("mostrar-modal"); 
        const vencedor = document.querySelector("#frase");
        vencedor.innerText = `Parabéns, jogador(a) nº${jogador}, você venceu!`; 

        const reset = document.querySelector("#reset");
        reset.innerText = "Reset"; 
        reset.addEventListener("click", () => {
            btReset();
            tabuleiro.map(item => item.fill("x"));
            element.classList.remove("mostrar-modal");
        });
    }, 1000);
}

const btReset = () => {
    for (let i=0;i<tabela.length;i++) {
        for (let j=0;j<tabela[i].length;j++) {
            arr[i][j].innerText = "";
        }
    }
    bloquearBotoes("remove");
    contadorUmV = 0, contadorDoisV = 0;
    contadorUmH = 0, contadorDoisH = 0;
    verificarPlayer = true;
    bt.map(item => item = item.src = "./assets/images/seta_padrao.png");
    pegarJogadorM.src = "./assets/images/luke_mobile.png";
    pegarJogadorD .src = "./assets/images/luke_desktop.png";
    figcaption.innerText = "Let's go!"
    if (verificar===true) {
        bt.map(item => item.src = "./assets/images/layout/shuriken.webp");
        jogadorNaruto.style.display = "initial";
        jogadorGaara.style.display = "none";
    }
}

const empateModal = () => {
    bloquearBotoes("adiciona");
    const element = document.getElementById("modal");
    element.classList.add("mostrar-modal"); 
    const vencedor = document.querySelector("#frase");
    vencedor.innerText = "Empate!!"; 

    const reset = document.querySelector("#reset");
    reset.innerText = "Reset"; 
    reset.addEventListener("click", () => {
        btReset();
        tabuleiro.map(item => item.fill("x"));
        element.classList.remove("mostrar-modal");
    })
}

const verificarV = coluna => {
    for (let i = 0 ;i < tabuleiro.length; i++) {
        if (tabuleiro[tabuleiro.length-(i+1)][coluna]==="b") {
            console.log(tabuleiro[tabuleiro.length-(i+1)][coluna]);
            contadorUmV++;
            console.log(`jogador1 : ${contadorUmV}`);
            if (contadorUmV===4) {
                venceu(1);
                break;
            } 
        } else {
            contadorUmV = 0;
        }
        if (tabuleiro[tabuleiro.length-(i+1)][coluna]==="g") {
            console.log(tabuleiro[tabuleiro.length-(i+1)][coluna]);
            contadorDoisV++;
            console.log(contadorDoisV)
            if (contadorDoisV===4) {
                venceu(2);
                break;
            } 
        } else {
            contadorDoisV = 0;
        }
    }
    contadorUmV = 0;
    contadorDoisV = 0;

}


const verificarH = coluna => {
    for (let i=0;i<tabuleiro.length;i++) {
        for (let j=0;j<tabuleiro[i].length;j++) {
            if (tabuleiro[i][j]==="b") {
                contadorUmH++;
                if (contadorUmH===4) {
                    venceu(1);
                    break;
                }
            } else {
                contadorUmH = 0;
            }
            if (tabuleiro[i][j]==="g") {
                contadorDoisH++;
                if (contadorDoisH===4) {
                    venceu(2);
                    break;
                }
            } else {
                contadorDoisH = 0;
            }
        }
    }
}

function verificaDiagonalEsquerda(matriz, player){
    for(x=0;x<=2; x++){
        for(y=0;y<=3; y++){
            if(matriz[x][y] === player){
                if(
                    matriz[x +1][y +1] === player &&
                    matriz[x +2][y +2] === player &&  
                    matriz[x +3][y +3] === player    
                ){
                    if(player === 'b'){
                        venceu(1);
                    }else{
                        venceu(2);
                    }
                    
                }
            }
        }            
    }
}                

function verificaDiagonalDireita(matriz, player){
   
    for(y=0;y<=2; y++){
        for(x=3;x<6; x++){
            if(matriz[y][x] === player){
                if(
                    matriz[y +1][x -1] === player &&
                    matriz[y +2][x -2] === player &&  
                    matriz[y +3][x -3] === player
                    
                ){
                    if(player === 'b'){
                        venceu(1);
                    }else{
                        venceu(2);
                    }
                    
                }
            }
        }            
    }
}

function isEmpate() {
    for (let linha = 0; linha < tabuleiro.length; linha++) {
        for (let coluna = 0; coluna < tabuleiro[linha].length; coluna++) {
            if (tabuleiro[linha][coluna] === "x") {
                return false
            }
        }
    }
    empateModal();
    return true;
}

function verificaVitoria(coluna){
    verificarH(coluna);
    verificarV(coluna);
    verificaDiagonalEsquerda(tabuleiro, 'b')
    verificaDiagonalEsquerda(tabuleiro, 'g')
    verificaDiagonalDireita(tabuleiro, 'b')
    verificaDiagonalDireita(tabuleiro, 'g')
    isEmpate()
}


// function atualizaInformacoes() {

//     const a = document.getElementsByClassName("indicador");
//     if (verificarPlayer) {
//         a[0].classList.remove("indicadorG");
//         a[0].classList.add("indicadorB");
//     } else if (!verificarPlayer) {
//         a[0].classList.remove("indicadorB");
//         a[0].classList.add("indicadorG");
//     }
// }

const pegarBt = document.querySelectorAll(".bt");
let bt = [...pegarBt];

const corSetaUm = () => {
    bt.map(item => item = item.src = "./assets/images/seta_player_1.png");
    verificar === true ? bt.map(item => item.src = "./assets/images/layout/shuriken.webp") : false;
    
}

const corSetadois = () => {
    bt.map(item => item = item.src = "./assets/images/seta_player_2.png");
    verificar === true ? bt.map(item => item.src = "./assets/images/layout/shuriken.webp") : false;
}

function bloquearBotoes(estado) {
    
    if (estado === "remove") {
        for (let i = 0; i < bt.length; i++) {
            bt[i].classList.remove("bt-block");
        }
    } else if (estado === "adiciona") {

        for (let i = 0; i < bt.length; i++) {
            bt[i].classList.add("bt-block");
        }
    }
}