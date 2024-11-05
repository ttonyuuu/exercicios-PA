let raio = parseFloat(prompt("Por favor, insira o raio do círculo:"));

//caucula a area do ciculoa área do círculo será exibida com duas casas decimais. Se você quiser exibir mais ou menos casas decimais, basta alterar o número dentro do toFixed()

let area = Math.PI * Math.pow(raio, 2);

//Math.PI é uma constante que fornece o valor de π.
//Math.pow(base, expoente) calcula a potência de um número.

alert(`A área do círculo com raio ${raio} é ${area.toFixed(2)}.`);

