//solicita ao usuario a medida do lado
let lado = parseFloat(prompt("Por favor, insira o comprimento do lado do quadrado:"));

let area = lado * lado;
//calcula o dobro da area
let dobroArea = area * 2;

alert(`A área do quadrado é ${area}. O dobro da área é ${dobroArea}.`);
