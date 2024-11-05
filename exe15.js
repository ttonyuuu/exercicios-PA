 ganho_por_hora = Float(prompt("Digite quanto você ganha por hora: R$ "))
 horas_trabalhadas =Float(prompt("Digite o número de horas trabalhadas no mês: "))


salario_bruto = ganho_por_hora * horas_trabalhadas
inss = salario_bruto * 0.08
sindicato = salario_bruto * 0.05
imposto_renda = salario_bruto * 0.11

descontos = inss + sindicato + imposto_renda

salario_liquido = salario_bruto - descontos


print(f"\nSalário Bruto: R$ {salario_bruto:.2f}")
print(f"Desconto do INSS: R$ {inss:.2f}")
print(f"Desconto do Sindicato: R$ {sindicato:.2f}")
print(f"Desconto do Imposto de Renda: R$ {imposto_renda:.2f}")
print(f"Salário Líquido: R$ {salario_liquido:.2f}")