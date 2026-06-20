# Nome do Laboratório

## Objetivo

Descrever de forma clara o objetivo do laboratório, o problema estudado e o conhecimento técnico que será desenvolvido.

Exemplo:

Este laboratório tem como objetivo implementar e documentar um ambiente prático de monitoramento, análise de logs e detecção de eventos de segurança utilizando ferramentas voltadas para Redes, Infraestrutura e Blue Team.

---

## Ambiente Utilizado

| Componente | Descrição |
|---|---|
| Host | Windows 11 / VMware Workstation |
| Máquina Virtual 1 | Ubuntu Server |
| Máquina Virtual 2 | Kali Linux |
| Rede | NAT / Bridge / Host-Only |
| Ferramentas | Wazuh, Suricata, Wireshark, pfSense, CrowdSec ou outras |

---

## Tecnologias e Conceitos

- Linux
- Redes de Computadores
- TCP/IP
- Logs
- Segurança da Informação
- SIEM
- IDS/IPS
- Firewall
- Troubleshooting
- Documentação técnica

---

## Arquitetura do Laboratório

Descrever a topologia, os sistemas envolvidos e o fluxo de comunicação.

Exemplo:

```text
Kali Linux
   |
   | tráfego / eventos / testes
   |
Ubuntu Server / Wazuh / Suricata / pfSense
   |
   | logs / alertas / evidências
   |
Dashboard / Arquivos de log / Documentação
```

---

## Etapas Realizadas

### 1. Planejamento

- Definição do objetivo do laboratório.
- Escolha das ferramentas.
- Definição das máquinas virtuais.
- Configuração de rede.
- Organização dos diretórios.

### 2. Instalação

- Instalação do sistema operacional.
- Atualização dos pacotes.
- Instalação das ferramentas principais.
- Configuração inicial dos serviços.

### 3. Configuração

- Ajustes de rede.
- Configuração de serviços.
- Definição de regras, agentes, sensores ou dashboards.
- Validação de conectividade.

### 4. Testes

- Execução de comandos de validação.
- Geração de tráfego ou eventos.
- Consulta de logs.
- Verificação de alertas.
- Registro das evidências.

### 5. Troubleshooting

- Problemas encontrados.
- Causa provável.
- Comandos utilizados.
- Solução aplicada.
- Aprendizado gerado.

---

## Evidências

Adicionar prints, comandos, logs ou trechos de saída relevantes.

Exemplo:

```bash
systemctl status nome-do-servico
```

```text
active (running)
```

---

## Principais Aprendizados

- Aprendizado 1
- Aprendizado 2
- Aprendizado 3
- Aprendizado 4

---

## Desafios Encontrados

- Desafio técnico encontrado.
- Como foi investigado.
- Como foi resolvido.
- O que poderia ser melhorado em uma próxima versão.

---

## Próximos Passos

- Melhorar a documentação.
- Adicionar novos testes.
- Integrar com outras ferramentas.
- Criar novas regras ou cenários.
- Automatizar validações.

---

## Aviso

Este laboratório foi desenvolvido exclusivamente para fins educacionais, em ambiente controlado e autorizado.

Nenhuma técnica, ferramenta ou configuração documentada aqui deve ser utilizada em ambientes de terceiros sem autorização.
