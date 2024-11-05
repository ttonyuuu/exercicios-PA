def calcular_tempo_download(tamanho_arquivo_mb, velocidade_link_mbps)

    tamanho_arquivo_mb = tamanho_arquivo_mb * 8
    

    tempo_download_segundos = tamanho_arquivo_mb / velocidade_link_mbps
    

    tempo_download_minutos = tempo_download_segundos / 60
    
    return tempo_download_minut
def main()
    # Entrada de dados
    tamanho_arquivo = float(input("Digite o tamanho do arquivo para download (em MB): "))
    velocidade_link = float(input("Digite a velocidade do link de Internet (em Mbps): "))
    

    tempo = calcular_tempo_download(tamanho_arquivo, velocidade_link)
    

    print(f"\nTempo aproximado para o download: {tempo:.2f} minutos")

main()