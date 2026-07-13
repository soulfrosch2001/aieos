import requests
import json
import re
import os
import subprocess 
from rich.console import Console
from rich.syntax import Syntax
from rich.panel import Panel
from rich.prompt import Prompt
from rich.markup import escape
import questionary

console = Console()

# URL padrão da API do Ollama
OLLAMA_URL = "http://localhost:11434/api/chat"
# O nome exato da IA que configuramos no seu PC
NOME_MODELO = "aieos"

# Memória da IA (para ela lembrar da conversa enquanto o script roda)
memoria = [
    {
        "role": "system",
        "content": """Você é o AIEOS, o núcleo inteligente do sistema operacional.
REGRA CRÍTICA: Fale, pense e responda EXCLUSIVAMENTE em Português do Brasil (pt-BR).
Você tem poderes para ler arquivos, escrever arquivos e executar comandos no terminal. Use ESTAS TAGS EXATAS quando necessário:
Para LER: [LER_ARQUIVO] caminho/do/arquivo [/LER_ARQUIVO]
Para ALTERAR/CRIAR: [ALTERAR_ARQUIVO] caminho/do/arquivo ||| código do arquivo [/ALTERAR_ARQUIVO]
Para EXECUTAR COMANDO: [EXECUTAR_COMANDO] comando do terminal aqui [/EXECUTAR_COMANDO]"""
    }
]

def comunicar_com_ia():
    """Envia o histórico de memória para o Ollama e retorna a resposta."""
    payload = {
        "model": NOME_MODELO,
        "messages": memoria,
        "stream": False
    }
    
    try:
        resposta = requests.post(OLLAMA_URL, json=payload)
        resposta.raise_for_status()
        dados = resposta.json()
        texto_ia = dados["message"]["content"]
        
        # Salva a resposta da IA na memória
        memoria.append({"role": "assistant", "content": texto_ia})
        return texto_ia
    except Exception as e:
        console.print(f"[bold red]Erro ao conectar com a IA: {e}[/bold red]")
        return None

def processar_resposta_ia(resposta_ia):
    """Lê a resposta da IA e ativa os superpoderes de forma limpa e isolada."""
    
    # --- 1. SUPERPODER DE LEITURA ---
    padrao_ler = r"\[LER_ARQUIVO\] (.*?) \[/LER_ARQUIVO\]"
    match_ler = re.search(padrao_ler, resposta_ia)
    
    if match_ler:
        caminho_arquivo = match_ler.group(1).strip()
        console.print(f"\n[bold cyan]🔍 AIEOS analisando arquivo:[/bold cyan] {caminho_arquivo}...")
        try:
            with open(caminho_arquivo, "r", encoding="utf-8") as arquivo:
                conteudo = arquivo.read()
            mensagem_oculta = f"[SISTEMA] Aqui está o conteúdo do arquivo '{caminho_arquivo}':\n\n{conteudo}"
            memoria.append({"role": "user", "content": mensagem_oculta})
            nova_resposta = comunicar_com_ia()
            if nova_resposta: 
                processar_resposta_ia(nova_resposta)
        except FileNotFoundError:
            console.print(f"[bold red]❌ Arquivo não encontrado:[/bold red] {caminho_arquivo}")
            memoria.append({"role": "user", "content": f"[SISTEMA] O arquivo {caminho_arquivo} não existe."})
            nova_resposta = comunicar_com_ia()
            if nova_resposta: 
                processar_resposta_ia(nova_resposta)
        return

    # --- 2. SUPERPODER DE ESCRITA ---
    padrao_alterar = r"\[ALTERAR_ARQUIVO\] (.*?) \|\|\| (.*?) \[/ALTERAR_ARQUIVO\]"
    match_alterar = re.search(padrao_alterar, resposta_ia, re.DOTALL)
    
    if match_alterar:
        caminho_arquivo = match_alterar.group(1).strip()
        conteudo = match_alterar.group(2).strip()
        console.print(f"\n[bold yellow]⚠️ AIEOS deseja criar/alterar o arquivo:[/bold yellow] {caminho_arquivo}")
        extensao = caminho_arquivo.split('.')[-1] if '.' in caminho_arquivo else 'text'
        sintaxe_colorida = Syntax(conteudo, extensao, theme="monokai", line_numbers=True)
        console.print(sintaxe_colorida)
        
        escolha = questionary.select("O que você deseja fazer?", choices=["Aceitar e Gravar", "Recusar"]).ask()
        if escolha == "Aceitar e Gravar":
            os.makedirs(os.path.dirname(caminho_arquivo) or '.', exist_ok=True)
            with open(caminho_arquivo, "w", encoding="utf-8") as arquivo:
                arquivo.write(conteudo)
            console.print("[bold green]✅ Arquivo gravado com sucesso![/bold green]")
            memoria.append({"role": "user", "content": f"[SISTEMA] Arquivo {caminho_arquivo} salvo com sucesso. Prossiga com o próximo passo da tarefa se houver."})
            nova_resposta = comunicar_com_ia()
            if nova_resposta: 
                processar_resposta_ia(nova_resposta)
        else:
            console.print("[bold red]❌ Ação canceleda.[/bold red]")
            memoria.append({"role": "user", "content": "[SISTEMA] O usuário recusou a alteração do arquivo."})
        return

    # --- 3. SUPERPODER DE EXECUÇÃO DE COMANDOS ---
    padrao_comando = r"\[EXECUTAR_COMANDO\] (.*?) \[/EXECUTAR_COMANDO\]"
    match_comando = re.search(padrao_comando, resposta_ia)
    
    if match_comando:
        comando = match_comando.group(1).strip()
        
        console.print(f"\n[bold red]🛑 ALERTA: AIEOS quer executar um comando no seu terminal:[/bold red]")
        console.print(Panel(comando, style="bold white on red"))
        
        escolha = questionary.select(
            "Você autoriza a execução desse comando?",
            choices=["Permitir (Executar)", "Bloquear (Recusar)"]
        ).ask()
        
        if escolha == "Permitir (Executar)":
            console.print("[bold yellow]⚙️ Executando...[/bold yellow]")
            try:
                resultado = subprocess.run(comando, shell=True, capture_output=True, text=True, encoding="utf-8", errors="ignore")
                saida_terminal = resultado.stdout + resultado.stderr
                
                console.print(saida_terminal)
                
                mensagem_oculta = f"[SISTEMA] Comando executado. Retorno do terminal:\n\n{saida_terminal}"
                memoria.append({"role": "user", "content": mensagem_oculta})
                
                nova_resposta = comunicar_com_ia()
                if nova_resposta: 
                    processar_resposta_ia(nova_resposta)
                
            except Exception as e:
                console.print(f"[bold red]❌ Erro ao rodar comando: {e}[/bold red]")
        else:
            console.print("[bold red]❌ Comando bloqueado por segurança.[/bold red]")
            memoria.append({"role": "user", "content": "[SISTEMA] O usuário não permitiu a execução desse comando."})
        return

    # --- 4. RESPOSTA NORMAL ---
    # O escape impede erros caso a IA envie colchetes na conversa comum
    console.print(f"\n[bold green]AIEOS:[/bold green] {escape(resposta_ia)}\n")

def main():
    # Limpa a tela
    os.system('cls' if os.name == 'nt' else 'clear')
    
    # O Mascote e Título em ASCII
    mascote = """
    █████╗ ██╗███████╗ ██████╗ ███████╗
   ██╔══██╗██║██╔════╝██╔═══██╗██╔════╝
   ███████║██║█████╗  ██║   ██║███████╗
   ██╔══██║██║██╔══╝  ██║   ██║╚════██║
   ██║  ██║██║███████╗╚██████╔╝███████║
   ╚═╝  ╚═╝╚═╝╚══════╝ ╚═════╝ ╚══════╝
    Sistema Operacional Autônomo Iniciado.
    """
    console.print(Panel(mascote, style="bold cyan"))
    
    # O Loop Infinito do Chat
    while True:
        try:
            input_usuario = Prompt.ask("[bold blue]Você[/bold blue]")
            
            if input_usuario.lower() in ['sair', 'exit', 'quit']:
                console.print("[bold red]Encerrando o AIEOS...[/bold red]")
                break
                
            memoria.append({"role": "user", "content": input_usuario})
            
            with console.status("[bold yellow]AIEOS está pensando e processando...[/bold yellow]", spinner="dots"):
                resposta = comunicar_com_ia()
                
            if resposta:
                processar_resposta_ia(resposta)
                
        except KeyboardInterrupt:
            console.print("\n[bold red]Encerrando...[/bold red]")
            break

if __name__ == "__main__":
    main()