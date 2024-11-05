let fahrenheit = parseFloat(prompt("Insira a temperatura em graus Fahrenheit:"));
//converte pra graus celsius
let celsius = (fahrenheit - 32) * 5 / 9;

alert(`A temperatura em graus Celsius é ${celsius.toFixed(2)}°C.`);
