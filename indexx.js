import numberRandom from "./random";
import verify from "./verifyNumber";


let numeroAleatorio = numberRandom(1, 10)
let numeroJogador = prompt("Informe um número: ");
let verificarNumero = verify(numeroJogador, numeroAleatorio)
let tentativas = 0

while (tentativas < 5 && verificarNumero === "igual"){
    
}