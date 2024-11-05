 let peso =parseFloat(prompt("digite o peso do peixe:" ));

 let limite =50
 let multa_por_quilo = 4.00
 let multa
 let excesso


if (peso  > limite) {

    excesso = peso - limite;  // Calcular o excesso de peso
    multa = excesso * multa_por_quilo;  // Calcular a multa com base no excesso
} else {
    excesso = 0;  // Caso não haja excesso
    multa = 0;    // Não há multa
}

// Exibir o resultado
alert("Excesso de peso: " + excesso + " kg");
alert("Multa a ser paga: R$ " + multa.toFixed(2));

