let entrada = prompt("Introduza um valor numérico inteiro ou sair")

function valorDivisivel(entrada){
    while(entrada != "sair"){
        let entradaParseada = parseInt(entrada)
        if(entradaParseada % 2 == 0){
            alert("O número " + entradaParseada + " é divisivel por 2.")
        } else if(entradaParseada % 2 == 1) {
            alert("O número " + entradaParseada + " não é divisivel por 2.")
        } else{
            alert("Valor digitado não é um número inteiro.")
        }
        console.log("valor digitado: " + entradaParseada)
        entrada = prompt("Introduza outro valor numérico inteiro ou sair")
    }
}

valorDivisivel(entrada)

console.log("sair digitado ou cancelado, encerrando programa.")