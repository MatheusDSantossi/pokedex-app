# Visão Geral do Projeto

## Objetivo

Criar uma Pokedex responsiva que consome a PokeAPI, oferecendo:

- **Listagem paginada** de Pokémon
- **Marcação de favoritos** persistida no navegador
- **Tela de detalhes** com múltiplos sprites e carrossel de imagens
- **Tema dark/light** responsivo

## Tecnologias

- **Framework**: Ionic 7 + Angular 16 (Standalone Components)
- **Estado & Dados**: Services + RxJS (Observables)
- **Persistência**: localStorage
- **Testes**: Jasmine/Karma com Puppeteer (Chromium headless)
- **Estilos**: SCSS com variáveis CSS para theming

## Princípios de Design

- **Atomic Design** para organização de componentes
- **Injeção de Dependências** para troca de implementações em teste
- **Reactive Programming** (Observables) para fluxos de dados
- **Mobile-first** e **Responsive Design** cuidando de retrato e paisagem
