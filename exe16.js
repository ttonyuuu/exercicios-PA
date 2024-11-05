 area = float(input("Digite o tamanho da área a ser pintada (em metros quadrados): "))


cobertura_por_litro = 3  
litros_por_lata = 18  
preco_por_lata = 80.00 



litros_necessarios = area / cobertura_por_litro  
latas_necessarias = math.ceil(litros_necessarios / litros_por_lata)  
preco_total = latas_necessarias * preco_por_lata  


alert(f"\nQuantidade de latas necessárias: {latas_necessarias}")
alert(f"Preço total: R$ {preco_total:.2f}")