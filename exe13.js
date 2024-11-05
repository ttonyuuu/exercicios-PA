let altura = parseFloat(prompt("Insira sua altura em metros:"));
let sexo = prompt("Informe seu sexo (masculino ou feminino):").toLowerCase();

let pesoIdeal;

if (sexo === "masculino") {
    pesoIdeal = (72.7 * altura) - 58;
} else if (sexo === "feminino") {
    pesoIdeal = (62.1 * altura) - 44.7;
} else {
    alert("Sexo inválido. Por favor, insira 'masculino' ou 'feminino'.");
}


let peso = parseFloat(prompt("Insira seu peso em kg:"));

// Verifica se o peso está dentro, acima ou abaixo do peso ideal


if (pesoIdeal) {
    if (peso < pesoIdeal) {
        alert(`Seu peso ideal é ${pesoIdeal.toFixed(2)} kg. Você está abaixo do peso.`);
    } else if (peso > pesoIdeal) {
        alert(`Seu peso ideal é ${pesoIdeal.toFixed(2)} kg. Você está acima do peso.`);
    } else {
        alert(`Seu peso ideal é ${pesoIdeal.toFixed(2)} kg. Você está no peso ideal.`);
    }
}
