import requests
import json
import re
import os
import subprocess 
import base64
from llama_cpp import Llama  
from rich.console import Console
from rich.syntax import Syntax
from rich.panel import Panel
from rich.prompt import Prompt
from rich.markup import escape
import questionary

console = Console()

NOME_ARQUIVO_MODELO = "Llama-3.2-1B-Instruct-Q4_K_M.gguf" 
CONFIG_FILE = ".aieos_config.json"
ARQUIVO_VISUAL = "agentes_status.json"
ARQUIVO_MEMORIA_LOCAL = "aieos_memoria.json"
llm = None  

memoria = []
plano_tarefas = [] 

def carregar_memoria_local():
    global memoria
    if os.path.exists(ARQUIVO_MEMORIA_LOCAL):
        try:
            with open(ARQUIVO_MEMORIA_LOCAL, "r", encoding="utf-8") as f:
                memoria = json.load(f)
            console.print("[bold green]🧠 Memória do AIEOS carregada com sucesso![/bold green]")
        except:
            memoria = []
    else:
        memoria = []

def salvar_memoria_local():
    try:
        with open(ARQUIVO_MEMORIA_LOCAL, "w", encoding="utf-8") as f:
            json.dump(memoria, f, indent=4, ensure_ascii=False)
    except: 
        pass

def resetar_memoria_total():
    global memoria, plano_tarefas
    memoria = []
    plano_tarefas = []
    if os.path.exists(ARQUIVO_MEMORIA_LOCAL):
        try: os.remove(ARQUIVO_MEMORIA_LOCAL)
        except: pass
    console.print("[bold red]💥 MEMÓRIA RESETADA! O histórico foi totalmente limpo.[/bold red]")

def notificar_painel_visual(nome_agente, status, mensagem):
    dados = {}
    if os.path.exists(ARQUIVO_VISUAL):
        try:
            with open(ARQUIVO_VISUAL, "r", encoding="utf-8") as f:
                dados = json.load(f)
        except: pass
    dados[nome_agente] = {"status": status, "mensagem": mensagem}
    try:
        with open(ARQUIVO_VISUAL, "w", encoding="utf-8") as f:
            json.dump(dados, f, indent=4, ensure_ascii=False)
    except: pass

def inicializar_ia_local():
    global llm
    if llm is None:
        if not os.path.exists(NOME_ARQUIVO_MODELO):
            console.print(f"\n[bold red]❌ Erro: O arquivo '{NOME_ARQUIVO_MODELO}' não foi encontrado![/bold red]")
            return False
        console.print("[bold yellow]🤖 Inicializando motores estáveis do AIEOS...[/bold yellow]")
        
        # FIX DEFINITIVO: Expandido para 16384 tokens reais na RAM
        llm = Llama(model_path=NOME_ARQUIVO_MODELO, n_ctx=16384, verbose=False)
        
        notificar_painel_visual("AIEOS", "Ocioso", "AIEOS Online!")
        notificar_painel_visual("Git_Agent", "Ocioso", "Nuvem ativa.")
        notificar_painel_visual("CMD_Agent", "Ocioso", "Terminal pronto.")
    return True

def gerenciar_login_github():
    if os.path.exists(CONFIG_FILE):
        with open(CONFIG_FILE, "r", encoding="utf-8") as f: return json.load(f)
    console.print("\n[bold yellow]🔑 [AIEOS LOGIN] Configuração GitHub[/bold yellow]")
    owner = Prompt.ask("[bold cyan]Usuário GitHub[/bold cyan]")
    repo = Prompt.ask("[bold cyan]Repositório[/bold cyan]")
    token = Prompt.ask("[bold cyan]Token (PAT)[/bold cyan]", password=True)
    config_dados = {"owner": owner, "repo": repo, "token": token}
    with open(CONFIG_FILE, "w", encoding="utf-8") as f: json.dump(config_dados, f, indent=4)
    return config_dados

def salvar_memoria_github(config):
    if config is None: return
    notificar_painel_visual("Git_Agent", "Executando", "Sincronizando nuvem...")
    url = f"https://api.github.com/repos/{config['owner']}/{config['repo']}/contents/memoria.json"
    headers = {"Authorization": f"Bearer {config['token']}", "Accept": "application/vnd.github+json"}
    sha = None
    try:
        resposta_get = requests.get(url, headers=headers)
        if resposta_get.status_code == 200: sha = resposta_get.json().get("sha")
    except: pass
    string_json = json.dumps(memoria, indent=4, ensure_ascii=False)
    conteudo_base64 = base64.b64encode(string_json.encode("utf-8")).decode("utf-8")
    payload = {"message": "AIEOS Sync", "content": conteudo_base64, "branch": "main"}
    if sha: payload["sha"] = sha
    try:
        resposta_put = requests.put(url, headers=headers, json=payload)
        if resposta_put.status_code in [200, 201]: 
            notificar_painel_visual("Git_Agent", "Ocioso", "Sincronizado!")
    except: pass

def exibir_checklist_tarefas():
    conteudo = ""
    for t in plano_tarefas:
        if t["status"] == "concluida":
            conteudo += f"[green]✔ [X] {t['texto']}[/green]\n"
        elif t["status"] == "andamento":
            conteudo += f"[yellow]⏳ [*] {t['texto']} (Em andamento...)[/yellow]\n"
        else:
            conteudo += f"[grey50]  [ ] {t['texto']}[/grey50]\n"
    console.print("\n" + str(Panel(conteudo.strip(), title="📋 CAIXINHA DE TAREFAS (AIEOS AGENT)", border_style="bold green")))

def executar_proxima_tarefa_do_plano():
    global plano_tarefas, memoria
    for t in plano_tarefas:
        if t["status"] == "pendente":
            t["status"] = "andamento"
            exibir_checklist_tarefas()
            
            prompt_automatico = f"[SISTEMA] Processe a tarefa atual do plano: {t['texto']}. Retorne a tag [READ] para abrir o arquivo correspondente."
            memoria.append({"role": "user", "content": prompt_automatico})
            salvar_memoria_local()
            
            with console.status(f"[bold yellow]AIEOS executando: {t['texto']}...[/bold yellow]", spinner="dots"):
                resposta = comunicar_com_ia()
            if resposta: processar_resposta_ia(resposta)
            return
            
    console.print("\n[bold bg_green white] 🎉 TAREFAS CONCLUÍDAS COM SUCESSO! [/bold bg_green white]\n")
    plano_tarefas = []

def comunicar_com_ia():
    global memoria
    try:
        notificar_painel_visual("AIEOS", "Executando", "Pensando...")
        
        # FIX DE SINTAXE: Removido atribuição dupla com erro
        if len(memoria) > 4:
            memoria = memoria[-4:]
            
        lista_arquivos_descobertos = []
        if os.path.exists("clones_ia"):
            for raiz, dirs, arquivos in os.walk("clones_ia"):
                if '.git' in dirs:
                    dirs.remove('.git')
                for arquivo in arquivos:
                    caminho_real = os.path.join(raiz, arquivo)
                    caminho_falso = caminho_real.replace("system_prompts_leaks", "base_dados")
                    lista_arquivos_descobertos.append(caminho_falso)
        
        total_encontrados = len(lista_arquivos_descobertos)
        if total_encontrados > 15:
            lista_arquivos_descobertos = lista_arquivos_descobertos[:15]
            string_arquivos = "\n".join(lista_arquivos_descobertos)
            string_arquivos += f"\n... e mais {total_encontrados - 15} arquivos ocultados temporariamente."
        else:
            string_arquivos = "\n".join(lista_arquivos_descobertos) if lista_arquivos_descobertos else "Nenhum arquivo listado."
            
        dna_sistema = {
            "role": "system",
            "content": f"""Você é o componente AIEOS, um formatador técnico de dados locais para Windows.
Seu objetivo é organizar tarefas e caminhos de texto usando marcadores estruturados.

LISTA DE CAMINHOS DISPONÍVEIS:
{string_arquivos}

REGRAS:
1. Escreva apenas em português de forma direta.
2. Não crie conversas ou justificativas fora das tags.
3. Quando solicitado a criar um plano, retorne a tag [PLAN] tarefa 1 || tarefa 2 [/PLAN] contendo os caminhos listados acima.

TAGS DISPONÍVEIS:
[PLAN]tarefa1 || tarefa2[/PLAN]
[RUN]comando[/RUN]
[WRITE]caminho ||| código[/WRITE]
[READ]caminho[/READ]
[WEB]url[/WEB]"""
        }
        
        historico_completo = [dna_sistema] + memoria
        resposta = llm.create_chat_completion(messages=historico_completo, temperature=0.1)
        response = resposta["choices"][0]["message"]["content"]
        
        memoria.append({"role": "assistant", "content": response})
        salvar_memoria_local()
        return response
    except Exception as e:
        console.print(f"[bold red]Erro de comunicação no Core: {e}[/bold red]")
        return None

def executar_comando_shell(comando):
    if "python " in comando.lower() and "launcher.py" not in comando.lower():
        if not comando.lower().startswith("start "):
            comando = f"start {comando}"

    console.print(f"\n[bold red]🛑 [AIEOS SHELL] Comando detectado:[/bold red]")
    console.print(Panel(comando, style="bold white on red"))
    escolha = questionary.select("Autorizar execução no prompt?", choices=["Permitir", "Recusar"]).ask()
    if escolha == "Permitir":
        notificar_painel_visual("CMD_Agent", "Executando", f"Rodando: {comando[:15]}")
        try:
            resultado = subprocess.run(comando, shell=True, capture_output=True, text=True, encoding="utf-8", errors="ignore")
            saida_terminal = resultado.stdout + resultado.stderr
            console.print(saida_terminal)
            memoria.append({"role": "user", "content": f"[SAIDA_SISTEMA]\n{saida_terminal}"})
            salvar_memoria_local()
            notificar_painel_visual("CMD_Agent", "Ocioso", "Comando Ok")
            
            nova_resposta = comunicar_com_ia()
            if nova_resposta: processar_resposta_ia(nova_resposta)
        except Exception as e:
            console.print(f"[bold red]❌ Falha de execução: {e}[/bold red]")
    else:
        memoria.append({"role": "user", "content": "[SISTEMA] Abortado."})
        salvar_memoria_local()

def processar_resposta_ia(resposta_ia):
    global plano_tarefas
    
    padrao_plano = r"\[PLAN\]\s*(.*?)\s*\[/PLAN\]"
    padrao_url = r"\[WEB\]\s*(.*?)\s*\[/WEB\]"
    padrao_ler = r"\[READ\]\s*(.*?)\s*\[/READ\]"
    padrao_alterar = r"\[WRITE\]\s*(.*?)\s*\|\|\|\s*(.*?)\s*\[/WRITE\]"
    padrao_comando = r"\[RUN\]\s*(.*?)\s*\[/RUN\]"

    match_plano = re.search(padrao_plano, resposta_ia, re.DOTALL)
    if match_plano:
        tarefas_cruas = match_plano.group(1).split("||")
        plano_tarefas = [{"texto": t.strip(), "status": "pendente"} for t in tarefas_cruas if t.strip()]
        console.print("[bold green]✅ Novo plano estruturado![/bold green]")
        executar_proxima_tarefa_do_plano()
        return

    match_comando = re.search(padrao_comando, resposta_ia, re.DOTALL)
    if match_comando:
        executar_comando_shell(match_comando.group(1).strip())
        return

    match_alterar = re.search(padrao_alterar, resposta_ia, re.DOTALL)
    if match_alterar:
        caminho_arquivo = match_alterar.group(1).strip()
        caminho_arquivo = caminho_arquivo.replace("base_dados", "system_prompts_leaks")
        conteudo = match_alterar.group(2).strip()
        notificar_painel_visual("AIEOS", "Executando", f"Alterando {caminho_arquivo}")
        console.print(f"\n[bold yellow]⚠️ Alteração detectada em:[/bold yellow] {caminho_arquivo}")
        extensao = caminho_arquivo.split('.')[-1] if '.' in caminho_arquivo else 'text'
        console.print(Syntax(conteudo, extensao, theme="monokai", line_numbers=True))
        
        escolha = questionary.select("Gravar modificação?", choices=["Confirmar (Gravar)", "Bloquear"]).ask()
        if escolha == "Confirmar (Gravar)":
            os.makedirs(os.path.dirname(caminho_arquivo) or '.', exist_ok=True)
            with open(caminho_arquivo, "w", encoding="utf-8") as arquivo: arquivo.write(conteudo)
            console.print("[bold green]✅ Código gravado![/bold green]")
            memoria.append({"role": "user", "content": f"[SISTEMA] Salvo {caminho_arquivo}."})
            salvar_memoria_local()
            nova_resposta = comunicar_com_ia()
            if nova_resposta: processar_resposta_ia(nova_resposta)
        return

    match_ler = re.search(padrao_ler, resposta_ia, re.DOTALL)
    if match_ler:
        caminho_arquivo = match_ler.group(1).strip()
        caminho_arquivo = caminho_arquivo.replace("base_dados", "system_prompts_leaks")
        try:
            with open(caminho_arquivo, "r", encoding="utf-8") as arquivo: conteudo = arquivo.read()
            memoria.append({"role": "user", "content": f"[CONTEÚDO DO ARQUIVO {caminho_arquivo}]\n{conteudo}\n\n[SISTEMA] Arquivo processado. Prossiga."})
            salvar_memoria_local()
            nova_resposta = comunicar_com_ia()
            if nova_resposta: processar_resposta_ia(nova_resposta)
        except Exception as e:
            memoria.append({"role": "user", "content": f"[ERRO] Falha ao ler: {e}"})
            salvar_memoria_local()
            nova_resposta = comunicar_com_ia()
            if nova_resposta: processar_resposta_ia(nova_resposta)
        return

    match_url = re.search(padrao_url, resposta_ia, re.DOTALL)
    if match_url:
        url_alvo = match_url.group(1).strip()
        try:
            resposta_web = requests.get(url_alvo, headers={"User-Agent": "Mozilla/5.0"}, timeout=10)
            memoria.append({"role": "user", "content": f"[RETORNO INTERNET]\n{resposta_web.text[:4000]}"})
            salvar_memoria_local()
            nova_resposta = comunicar_com_ia()
            if nova_resposta: processar_resposta_ia(nova_resposta)
        except: pass
        return

    blocos_codigo = re.findall(r"\x60\x60\x60(?:bash|cmd|powershell|python|text)?\s*(.*?)\s*\x60\x60\x60", resposta_ia, re.DOTALL)
    for bloco in blocos_codigo:
        bloco_limpo = bloco.strip()
        for padrao in ["git clone", "pip install", "python "]:
            if padrao in bloco_limpo.lower():
                linhas = [l.strip() for l in bloco_limpo.split("\n") if l.strip()]
                for linha in linhas: # <-- LINHA CORRIGIDA AQUI
                    if padrao in linha.lower():
                        is_git = "git clone" in linha.lower()
                        is_leak = "system_prompts" in resposta_ia.lower()
                        is_fdp = "fdp" in resposta_ia.lower()
                        if is_git and (is_leak or is_fdp):
                            linha = "git clone https://github.com/asgeirtj/system_prompts_leaks.git clones_ia"
                        executar_comando_shell(linha)
                        return

    for linha in resposta_ia.split("\n"):
        linha_limpa = linha.replace("`", "").strip()
        for padrao in ["git clone ", "pip install ", "python pixel_hub.py"]:
            has_padrao = padrao in linha_limpa.lower()
            has_hub = "github.com" in linha_limpa.lower()
            if linha_limpa.lower().startswith(padrao) or (has_padrao and has_hub):
                if "git clone" in linha_limpa.lower():
                    linha_limpa = "git clone https://github.com/asgeirtj/system_prompts_leaks.git clones_ia"
                executar_comando_shell(linha_limpa)
                return

    if plano_tarefas:
        for t in plano_tarefas:
            if t["status"] == "andamento":
                t["status"] = "concluida"
                break
        executar_proxima_tarefa_do_plano()
        return

    notificar_painel_visual("AIEOS", "Ocioso", "Pronto!")
    console.print(f"\n[bold green]AIEOS:[/bold green] {escape(resposta_ia)}\n")

def main():
    config_github = gerenciar_login_github()
    carregar_memoria_local()
    
    if not inicializar_ia_local(): return

    os.system('cls' if os.name == 'nt' else 'clear')
    console.print(Panel("👾 AIEOS Kernel v6.2 - Contexto Ampliado 16K Real Ativo", style="bold green"))
    
    while True:
        try:
            notificar_painel_visual("AIEOS", "Ocioso", "Zzz...")
            input_usuario = Prompt.ask("[bold blue]AIEOS[/bold blue]")
            
            if input_usuario.lower() == 'clear':
                resetar_memoria_total()
                continue
            
            if input_usuario.lower() in ['sair', 'exit', 'quit']:
                salvar_memoria_local()
                salvar_memoria_github(config_github)
                break
                
            memoria.append({"role": "user", "content": input_usuario})
            salvar_memoria_local()
            with console.status("[bold yellow]AIEOS processando fluxo...[/bold yellow]", spinner="dots"):
                resposta = comunicar_com_ia()
            if reply := resposta: processar_resposta_ia(reply)
                
        except KeyboardInterrupt:
            salvar_memoria_github(config_github)
            break

if __name__ == "__main__":
    main()
