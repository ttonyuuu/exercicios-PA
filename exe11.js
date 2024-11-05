let primeiroNumero = parseInt(prompt("Insira o primeiro número inteiro:"));
let segundoNumero = parseInt(prompt("Insira o segundo número inteiro:"));
let terceiroNumero = parseFloat(prompt("Insira o terceiro número real:"));


let produto = (2 * primeiroNumero) * (segundoNumero / 2);
let soma = (3 * primeiroNumero) + terceiroNumero;
let cuboTerceiro = Math.pow(terceiroNumero, 3);

alert(`Produto do dobro do primeiro com metade do segundo: ${produto}`);
alert(`Soma do triplo do primeiro com o terceiro: ${soma}`);
alert(`Terceiro elevado ao cubo: ${cuboTerceiro}`);