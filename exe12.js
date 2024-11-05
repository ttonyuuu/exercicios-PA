let altura = parseFloat(prompt("Insira sua altura em metros:"));

// Calcula o peso ideal
let pesoIdeal = (72 * altura) - 58;

// Mostra o resultado
alert(`Seu peso ideal é ${pesoIdeal.toFixed(2)} kg.`);

