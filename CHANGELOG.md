# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.0] - 2025-06-18

### Added

- Toggle de tema dark/light na HomePage com ícone dinâmico (sun/moon)
- Gradiente de título (`.home-page-title`) que muda conforme o tema
- Importação de `dark.class.css` em `global.scss` para dark mode via classe

## [0.2.0] - 2025-06-17

### Added

- Inicialização do roteamento standalone em `app.route.ts` e `main.ts`
- Pasta `core` para serviços e `pages` para componentes de página
- Configuração de preloading de rotas em `main.ts`

### Changed

- `AppComponent` atualizado para usar `IonicModule` + `RouterModule`
- Refatoração da estrutura de pastas para melhor organização

## [0.1.0] - 2025-06-17

### Added

- Estrutura inicial do projeto Ionic-Angular
- Arquivos base: `.gitignore`, `CHANGELOG.md`, `README.md`
- Configuração inicial do ambiente de desenvolvimento

### Changed

- Atualizado `.gitignore` para excluir totalmente a pasta `.vscode/`

### Removed

- Pasta `.vscode` removida do repositório local e remoto

