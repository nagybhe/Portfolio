# 🎯 Portfólio — André Nagybhe

[![CI](https://github.com/nagybhe/Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/nagybhe/Portfolio/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=flat&logo=vite&logoColor=white)](https://vite.dev/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://portfolio-eta-two-51.vercel.app/)

Portfólio profissional de QA Automation Engineer, em React + Vite. Single Page
Application com seções de perfil, hard skills, qualificações e projetos, cada
projeto detalhado em modal com imagens, tecnologias e links.

🔗 **[portfolio-eta-two-51.vercel.app](https://portfolio-eta-two-51.vercel.app/)**

## 🛠️ Stack

| Camada | Tecnologias |
| --- | --- |
| UI | React 18, React Bootstrap 2, Bootstrap 5, CSS modularizado por componente |
| Build | Vite 8 |
| Animações | AOS, Typed.js |
| Formulário | EmailJS (`@emailjs/browser`) |
| Testes | Vitest + Testing Library (unitários), Playwright (E2E, desktop e mobile) |
| Qualidade | ESLint 9 (flat config) com `react-hooks` e `jsx-a11y` |
| CI/CD | GitHub Actions, deploy na Vercel |

## 📦 Instalação

```bash
git clone https://github.com/nagybhe/Portfolio.git
cd Portfolio
npm install
cp .env.example .env.local   # preencha as credenciais do EmailJS
npm run dev
```

### Variáveis de ambiente

O formulário de contato precisa das três variáveis abaixo — em desenvolvimento
no `.env.local`, em produção em **Vercel → Settings → Environment Variables**.
Sem elas o formulário não quebra: exibe um aviso e orienta o contato direto por
e-mail.

```dotenv
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

> Não há valores embutidos no código como fallback. Tudo que vai para o bundle é
> público, e um fallback no código anularia o `.gitignore` do `.env`.

## 📋 Scripts

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento em <http://localhost:3000> |
| `npm run build` | Build de produção em `build/` |
| `npm run preview` | Serve o build de produção em <http://localhost:4173> |
| `npm run lint` | ESLint em todo o projeto |
| `npm test` | Testes unitários (Vitest) |
| `npm run test:watch` | Unitários em modo watch |
| `npm run test:coverage` | Unitários com relatório de cobertura |
| `npm run test:e2e` | E2E com Playwright (rode `npm run build` antes) |

## 🧪 Testes

```bash
# Unitários — 48 testes
npm test

# E2E — 72 execuções (Chromium desktop + Pixel 7)
npm run build
npx playwright install chromium   # só na primeira vez
npm run test:e2e
```

**Unitários** (`src/**/*.test.{js,jsx}`) cobrem o catálogo de projetos, filtros,
abertura de modais, o formulário de contato (envio, falha e ambiente não
configurado), navegação, menu mobile e o catálogo de skills.

Destaque para `src/data/projects.test.js`, que valida o catálogo contra o disco:
todo caminho de imagem e vídeo tem que existir em `public/`, ser absoluto e
ASCII. É o teste que pega thumbnail renomeado, caminho relativo e arquivo
removido antes do deploy.

**E2E** (`e2e/smoke.spec.js`) roda contra o bundle de produção e verifica
seções, filtros, modais, navegação mobile, metatags de compartilhamento,
ausência de imagem quebrada e de erro no console — além da identidade visual:
uniformidade do fundo em qualquer rolagem, blur de vidro aplicado em sidebar,
cards e modais, e padronização do espaçamento entre seções.

## 🏗️ Estrutura

```text
Portfolio/
├── .github/workflows/ci.yml    # lint + unitários + build + E2E
├── e2e/                        # especificações Playwright
├── public/
│   ├── assets/                 # imagens (WebP), vídeo, favicons, og-image
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/             # um diretório por componente (.jsx + .css)
│   │   ├── About/  ContactModal/  Header/  Hero/
│   │   └── Portfolio/  ProjectModal/  Resume/  Skills/
│   ├── data/projects.js        # catálogo de projetos e categorias
│   ├── App.jsx
│   ├── main.jsx
│   └── setupTests.js
├── index.html                  # entrada do Vite, metatags e JSON-LD
├── eslint.config.js
├── playwright.config.js
├── vite.config.js              # build + configuração do Vitest
└── vercel.json                 # rewrites SPA e cache de assets
```

## 🚀 Funcionalidades

- **SPA responsiva** com navegação por âncoras e destaque da seção ativa
- **Menu mobile** com toggle, backdrop e fechamento por `Esc`
- **Filtro de projetos** por categoria, operável por teclado
- **Modal de projeto** com carrossel de imagens ou vídeo demonstrativo
- **Formulário de contato** via EmailJS, com estados de envio, erro e indisponível
- **Acessibilidade**: foco visível, `aria-*` nos controles, `prefers-reduced-motion`
- **SEO**: Open Graph, Twitter Card, canonical, JSON-LD (`Person`), sitemap e robots

## 📄 Licença

[Apache 2.0](https://opensource.org/licenses/Apache-2.0)
