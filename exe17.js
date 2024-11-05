import math

def main()

def  calcular_tinta(area):

    cobertura_por_litro = 6
    
    
    litros_necessarios = (area / cobertura_por_litro) * 1.1  
    
    
    latas_necessarias = math.ceil(litros_necessarios / 18)
    preco_latas = latas_necessarias * 80
    
    
    galoes_necessarios = math.ceil(litros_necessarios / 3.6)
    preco_galoes = galoes_necessarios * 25
    

    latas = math.floor(litros_necessarios / 18)
    litros_restantes = litros_necessarios - (latas * 18)
    galoes = math.ceil(litros_restantes / 3.6)
    preco_mistura = (latas * 80) + (galoes * 25)
    
    return latas_necessarias, preco_latas, galoes_necessarios, preco_galoes, latas, galoes, preco_mistura


def main():

    area = float(input("Digite o tamanho da área a ser pintada (em metros quadrados): "))
    

    latas_necessarias, preco_latas, galoes_necessarios, preco_galoes, latas, galoes, preco_mistura = calcular_tinta(area)

    print("\nResultados:")
    print(f"1. Comprar apenas latas de 18 litros: {latas_necessarias} latas, Preço total: R$ {preco_latas:.2f}")
    print(f"2. Comprar apenas galões de 3,6 litros: {galoes_necessarios} galões, Preço total: R$ {preco_galoes:.2f}")
    print(f"3. Misturar latas de 18 litros e galões de 3,6 litros: {latas} latas e {galoes} galões, Preço total: R$ {preco_mistura:.2f}")

