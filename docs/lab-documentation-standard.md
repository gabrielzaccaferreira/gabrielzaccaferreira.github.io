# Padrão de Documentação para Laboratórios Técnicos

Este documento define o padrão recomendado para documentar laboratórios técnicos do portfólio.

O objetivo é manter todos os projetos organizados, claros e úteis para estudo, revisão, apresentação profissional e avaliação por recrutadores.

---

## Estrutura Recomendada

Todo laboratório deve conter, sempre que possível:

1. Objetivo
2. Ambiente utilizado
3. Tecnologias e conceitos
4. Arquitetura do laboratório
5. Etapas realizadas
6. Evidências
7. Troubleshooting
8. Principais aprendizados
9. Desafios encontrados
10. Próximos passos
11. Aviso de uso educacional

---

## 1. Objetivo

A seção de objetivo deve responder:

- O que foi estudado?
- Qual problema técnico o laboratório ajuda a entender?
- Qual tecnologia foi aplicada?
- Qual habilidade foi desenvolvida?

Exemplo:

```text
Implementar um ambiente prático de SIEM/XDR com Wazuh para compreender coleta de logs, agentes, eventos de segurança e fundamentos de SOC/Blue Team.
```

---

## 2. Ambiente Utilizado

Sempre documentar:

- Host físico
- Sistema operacional do host
- Hypervisor
- Máquinas virtuais
- CPU, RAM e disco das VMs
- Tipo de rede
- Endereços IP, quando forem de laboratório
- Ferramentas utilizadas

Evitar publicar:

- Senhas
- Tokens
- Chaves privadas
- IPs públicos sensíveis
- Dados pessoais
- Informações de terceiros

---

## 3. Tecnologias e Conceitos

Listar as principais tecnologias e fundamentos usados no laboratório.

Exemplos:

- Linux
- Windows Server
- VMware Workstation
- TCP/IP
- DNS
- DHCP
- NAT
- Firewall
- Logs
- SIEM
- IDS/IPS
- Blue Team
- Troubleshooting

---

## 4. Arquitetura

A arquitetura pode ser descrita com texto, tabela ou diagrama simples.

Exemplo:

```text
Host Windows 11
 └── VMware Workstation
      ├── Ubuntu Server
      ├── Kali Linux
      ├── pfSense
      └── Windows Server
```

Sempre que possível, explicar:

- Quem gera os eventos
- Quem coleta os logs
- Quem analisa
- Onde as evidências são visualizadas
- Qual é o fluxo de rede

---

## 5. Etapas Realizadas

As etapas devem seguir uma ordem lógica:

```text
Planejamento → Instalação → Configuração → Testes → Validação → Documentação
```

Cada etapa deve conter comandos, observações e validações quando aplicável.

---

## 6. Evidências

As evidências servem para comprovar que o laboratório foi executado.

Podem incluir:

- Prints de tela
- Saída de comandos
- Logs
- Status de serviços
- Alertas gerados
- Dashboards
- Testes de conectividade

Exemplo:

```bash
systemctl status wazuh-manager
```

```text
active (running)
```

---

## 7. Troubleshooting

Toda falha relevante deve ser documentada.

Formato recomendado:

```text
Problema:
Causa provável:
Comandos usados:
Solução:
Aprendizado:
```

Isso demonstra raciocínio técnico e capacidade de resolver problemas.

---

## 8. Aprendizados

A seção de aprendizados deve ser escrita de forma clara e profissional.

Exemplo:

```text
Com este laboratório, foi possível compreender como agentes enviam eventos para um servidor central, como logs são processados e como alertas podem apoiar uma rotina inicial de SOC.
```

---

## 9. Próximos Passos

Todo laboratório pode evoluir.

Exemplos:

- Adicionar novas regras
- Criar novos testes
- Integrar com outra ferramenta
- Melhorar a topologia
- Automatizar tarefas
- Criar documentação complementar
- Publicar evidências adicionais

---

## 10. Boas Práticas

- Usar nomes claros nos arquivos.
- Evitar prints desnecessários.
- Explicar o motivo de cada etapa.
- Não publicar credenciais.
- Validar links internos.
- Manter linguagem técnica, mas compreensível.
- Separar teoria, prática e troubleshooting.
- Usar o GitHub como vitrine profissional.

---

## 11. Aviso de Uso Educacional

Todos os laboratórios devem deixar claro que foram realizados em ambiente próprio, controlado e autorizado.

Modelo recomendado:

```text
Este laboratório foi desenvolvido exclusivamente para fins educacionais, em ambiente controlado e autorizado. Nenhuma técnica, ferramenta ou configuração deve ser utilizada em ambientes de terceiros sem autorização.
```

---

## Objetivo Profissional

A documentação dos laboratórios tem como objetivo demonstrar evolução prática nas áreas de:

- Suporte Técnico
- Redes de Computadores
- Infraestrutura
- Linux
- Windows Server
- Cloud Computing
- Segurança da Informação
- SOC/Blue Team
