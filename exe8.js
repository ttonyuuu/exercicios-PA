//usuario precisa informar quanto ganha por hora
let ganhoPorHora = parseFloat(prompt("Quanto você ganha por hora?"));
//informe as horas trabalhadas
let horasTrabalhadas = parseFloat(prompt("Quantas horas você trabalhou no mês?"));

//calcula salario total
let salarioTotal = ganhoPorHora * horasTrabalhadas;

alert(`Seu salário total no mês é R$ ${salarioTotal.toFixed(2)}.`);
