\# Política de Evidências



Este documento define o checklist de segurança antes da publicação de prints, logs, comandos, dashboards e evidências no portfólio.



\## Prints



Antes de publicar qualquer imagem, verificar:



\- \[ ] Não aparece IP público

\- \[ ] Não aparece usuário real

\- \[ ] Não aparece e-mail pessoal em painel técnico

\- \[ ] Não aparece senha

\- \[ ] Não aparece token

\- \[ ] Não aparece chave SSH

\- \[ ] Não aparece MAC address real

\- \[ ] Não aparece hostname pessoal

\- \[ ] Não aparece caminho local sensível

\- \[ ] Não aparece sessão/cookie

\- \[ ] Não aparece painel administrativo com URL sensível

\- \[ ] Não aparece QR Code ou código de recuperação



\## Logs



Antes de publicar logs, verificar:



\- \[ ] IPs públicos foram removidos ou mascarados

\- \[ ] Usuários reais foram anonimizados

\- \[ ] Hostnames foram padronizados

\- \[ ] Caminhos locais foram revisados

\- \[ ] Tokens e secrets foram removidos

\- \[ ] Dados de terceiros foram removidos

\- \[ ] O log não contém credenciais em texto claro



\## Comandos



Antes de publicar comandos, verificar:



\- \[ ] Não contém senha em linha de comando

\- \[ ] Não contém token em `curl`

\- \[ ] Não contém chave privada

\- \[ ] Não contém arquivo `.env`

\- \[ ] Não contém credencial de dashboard

\- \[ ] Não contém IP público real



\## Dashboards



Antes de publicar prints de dashboards, verificar:



\- \[ ] Não aparece usuário logado

\- \[ ] Não aparece e-mail

\- \[ ] Não aparece URL sensível

\- \[ ] Não aparece token ou sessão

\- \[ ] Não aparece IP público

\- \[ ] Não aparece dado de terceiro

\- \[ ] Não aparece informação que permita acesso ao ambiente



\## Padrão de anonimização



| Dado | Padrão |

|---|---|

| IP público | `x.x.x.x` |

| IP privado de laboratório | `10.10.10.x` ou `192.168.x.x` |

| Usuário | `usuario-lab` |

| Senha | `\*\*\*\*\*\*\*\*` |

| Token | `<TOKEN\_REMOVIDO>` |

| E-mail | `email@example.com` |

| MAC | `00:00:00:00:00:00` |

| Hostname | `host-lab` |

| Domínio | `lab.local` |



\## Observação sobre IPs privados



Endereços como `10.10.10.x`, `192.168.x.x` e `172.16.x.x` podem aparecer na documentação quando forem parte do ambiente de laboratório. Mesmo assim, devem ser revisados antes da publicação.

