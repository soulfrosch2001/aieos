import pygame
import json
import os
import sys

pygame.init()

# Configuração da janela (Mais larga para acomodar a aba lateral do Claude Code)
LARGURA_JOGO = 600
LARGURA_SIDEBAR = 300
LARGURA, ALTURA = LARGURA_JOGO + LARGURA_SIDEBAR, 500
tela = pygame.display.set_mode((LARGURA, ALTURA))
pygame.display.set_caption("AIEOS Pixel Agents Hub")

# Cores Retrô
COR_FUNDO = (20, 20, 25)
COR_SIDEBAR = (30, 30, 38)
COR_BORDA = (50, 50, 65)
COR_TEXTO = (220, 220, 250)
COR_VERDE = (50, 220, 120)
COR_AMARELO = (240, 200, 60)

fonte = pygame.font.SysFont("Consolas", 14)
fonte_titulo = pygame.font.SysFont("Consolas", 16, bold=True)

clock = pygame.time.Clock()
ARQUIVO_STATUS = "agentes_status.json"

def carregar_status_agentes():
    """Lê o arquivo JSON gerado pelo Kernel do AIEOS."""
    if os.path.exists(ARQUIVO_STATUS):
        try:
            with open( ARQUIVO_STATUS, "r", encoding="utf-8") as f:
                return json.load(f)
        except:
            return {}
    return {}

def desenhar_sidebar(tela, status_dados):
    """Desenha a aba lateral de monitoramento de processos."""
    # Retângulo da Sidebar
    pygame.draw.rect(tela, COR_SIDEBAR, (LARGURA_JOGO, 0, LARGURA_SIDEBAR, ALTURA))
    pygame.draw.line(tela, COR_BORDA, (LARGURA_JOGO, 0), (LARGURA_JOGO, ALTURA), 2)
    
    # Título do Painel
    txt_titulo = fonte_titulo.render("🖥️ CORE MONITOR (AIEOS)", True, COR_VERDE)
    tela.blit(txt_titulo, (LARGURA_JOGO + 15, 20))
    pygame.draw.line(tela, COR_BORDA, (LARGURA_JOGO + 15, 45), (LARGURA - 15, 45), 1)
    
    y_offset = 70
    # Renderiza o status de cada agente registrado pelo launcher
    for agente, info in status_dados.items():
        status = info.get("status", "Desconhecido")
        msg = info.get("mensagem", "")
        
        # Cor indicadora baseada no estado físico
        cor_status = COR_VERDE if status in ["Ocioso", "Comando Ok", "Sincronizado!"] else COR_AMARELO
        
        txt_agente = fonte_titulo.render(f"🤖 {agente}:", True, COR_TEXTO)
        txt_status = fonte.render(f"[{status}]", True, cor_status)
        
        tela.blit(txt_agente, (LARGURA_JOGO + 15, y_offset))
        tela.blit(txt_status, (LARGURA_JOGO + 140, y_offset))
        
        # Desenha a mensagem/comando atual de forma truncada se for muito longa
        if len(msg) > 32:
            msg = msg[:29] + "..."
        txt_msg = fonte.render(f" > {msg}", True, (150, 150, 170))
        tela.blit(txt_msg, (LARGURA_JOGO + 15, y_offset + 20))
        
        y_offset += 65

def main():
    while True:
        tela.fill(COR_FUNDO)
        
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
                
        # 🎮 ÁREA DO JOGO (Desenhe aqui as animações dos seus bonecos pixel art)
        txt_jogo = fonte.render("[Área de Renderização dos Pixel Agents]", True, (80, 80, 100))
        tela.blit(txt_jogo, (150, 240))
        
        # 🖥️ ÁREA DO MONITOR DA IA (Lê o JSON e joga na tela)
        dados = carregar_status_agentes()
        desenhar_sidebar(tela, dados)
        
        pygame.display.flip()
        clock.tick(30)

if __name__ == "__main__":
    main()