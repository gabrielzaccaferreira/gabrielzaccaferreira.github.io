# ARCHITECTURE

## Projeto

Tech Journey

Autor:

Gabriel Zacca Ferreira

---

# Missão

Construir um portfólio técnico de alto nível que documente toda minha evolução em:

- Redes de Computadores
- Infraestrutura
- Linux
- Cloud Computing
- Cibersegurança

O projeto deve servir como:

- Portfólio profissional
- Base de conhecimento
- Blog técnico
- Documentação de laboratórios
- Marca pessoal

---

# Arquitetura Geral

```
Visitante

↓

Home (visão geral + atalhos para Labs e Recrutadores)

↓

Sobre · Recrutadores · Projetos

↓

Guia de Estudos · Documentação

↓

Laboratórios (Wazuh, Kali Linux, Suricata, CrowdSec, Wireshark, pfSense, Windows Server)

↓

Blog (Diário Técnico)

↓

Roadmap
```

Certificações e Contato hoje vivem como seções dentro da Home, não como páginas independentes — mantém a navegação mais curta sem perder a informação.

---

# Estrutura do Repositório

```
gabrielzaccaferreira.github.io

│

├── assets

│      ├── images        (screenshots de evidência por lab, foto de perfil, og-image)

│      ├── js             (carousel.js)

│      └── curriculo.pdf

│

├── pages                 (todas as páginas internas: labs, sobre, jornada, blog, guia, etc.)

│      └── posts          (artigos do Diário Técnico / blog)

│

├── docs                  (padrões internos: evidence-policy, lab-documentation-standard)

│

├── index.html

├── style.css

├── 404.html

├── manifest.webmanifest

├── robots.txt

├── sitemap.xml

├── CNAME

│

├── README.md

├── ROADMAP.md

├── DESIGN_SYSTEM.md

├── ARCHITECTURE.md

├── SEO.md

├── SECURITY.md

└── DISCLAIMER.md
```

Nota: as pastas `blog/`, `certificados/`, `labs/` e `projetos/` planejadas inicialmente foram consolidadas dentro de `pages/`, para manter um único ponto de entrada de navegação e evitar duplicidade de templates. Cada página de laboratório já inclui sua própria seção de evidências, blog e contexto de carreira.

---

# Filosofia

Não construir apenas páginas.

Construir um ecossistema de conhecimento.

---

# Fluxo de Produção

Cada novo estudo deverá gerar:

```
Estudo

↓

Laboratório

↓

GitHub

↓

Site

↓

LinkedIn

↓

Instagram

↓

Obsidian
```

---

# Tecnologias

Frontend

- HTML

- CSS

Futuro

- JavaScript

- Node.js

- Docker

- Azure

---

# Organização

Todo desenvolvimento seguirá:

Planejamento

↓

Arquitetura

↓

Wireframe

↓

Desenvolvimento

↓

Teste

↓

Commit

↓

Deploy

---

# Padrão de Commits

Exemplos:

```
Cria home premium

Adiciona página sobre

Implementa cards

Cria timeline

Melhora responsividade
```

---

# Objetivo Final

Criar um dos melhores portfólios técnicos públicos voltados para Redes, Infraestrutura, Cloud e Cibersegurança.