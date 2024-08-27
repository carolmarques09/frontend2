let numero1 = 50
let numero2 = 20
let soma
let operador = '*'
let subtracao
let multiplicacao = 0
let divisao

console.log("Adição: ")
console.log("Subtração: ")
console.log("Multiplicação: ")

switch (operador) {
    case '+':
        soma = numero1 + numero2
        console.log("O resultado da soma é: " + soma)
        break
    case '-':
        subtracao = numero1 - numero2
        console.log("O resultado da subtração é: " + subtracao)
        break
    case '*':
        multiplicacao = numero1 * numero2
        console.log("O resultado da multiplicação é: " + multiplicacao)
        break
    case '/':
        if (numero2 == 0) {
            console.log("Não é possível dividir por 0")
        } else {
            divisao = numero1 / numero2
            console.log("O resultado da divisão é: " + divisao)
        }
        break
    default:
        console.log("Operador inválido")

}