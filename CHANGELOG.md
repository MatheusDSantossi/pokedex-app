# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.9.0] - 2025-06-20

### Added

- Testes unitários para `PokemonService` (listPokemons, getPokemon) usando `provideHttpClientTesting`.
- Testes unitários para `FavoritesService` (toggleFavorite, isFavorite, getAll) usando `localStorage`.
- Componentes de teste para `HomePage` e `DetailPage`, com `PokemonService` e `ActivatedRoute`.
- Configuração do arquivo Karma para usar Puppeteer's Chromium (`process.env.CHROME_BIN = puppeteer.executablePath()`).
- Scripts NPM: `test:ci`, `test:chrome`, `test:brave`.

### Changed

- `app.component.ts` atualizado para utilizar `provideAnimations()` para oferecer suporte as aniações.
- `karma.conf.js` atualizado para registrar os `customLaunchers.BraveHeadless` e o padrão do `ChromeHeadless` via Puppeteer.

## [0.7.0] - 2025-06-21

### Added

- DetailPage agora carrega múltiplos sprites (front, back, official artwork) para eventual carrossel.

### Changed

- Refatorado o `PokemonService` para expor mais campos das sprites.
- Ajustes no `detail.page.html` e `.ts` para renderização de imagens e carrosel de imagens.

### Style

- Refinamento de variáveis de tema em `global.scss` (gradientes, cores de texto e background).
- Ajustes nos ícones de navegação de tema em `main.ts` e no `ThemeToggleComponent`.

### Chore

- Atualização de dependências em `package.json` e lockfile.
- Configuração de providers e bootstrap em `main.ts` via `provideHttpClient`, `provideRouter` e `provideAnimations`.

## [0.7.0] - 2025-06-20

### Added

- Refinamentos na FavoritesPage e DetailPage (ajuste de ícones, markup e sincronização de estado).
- Novo filtro “Favorites” no ion-segment com layout melhorado.

### Changed

- Refatorada lógica de paginação na HomePage para suportar offset corretamente.
- HomePage agora filtra corretamente entre “All” e “Favorites” sem precisar de reload.

### Style

- Melhora suavidade das cores destacadas em dark mode.

## [0.6.0] - 2025-06-20

### Added

- Sincronização de favoritos ao entrar na HomePage (`ViewWillEnter`).
- Filtro por “All” / “Favorites” via `ion-segment` e getter `displayedPokemons`.
- Botão de favorito na DetailPage e HomePage atualiza imediatamente o estado.

### Changed

- Botões “Anterior”/“Próxima” desativam ou ocultam conforme segmento e offset.

### Style

- Ícones de coração (`.heart-icon`) agora usam `color: red !important` para traço vermelho.
- Segmentos com cores diferentes (`.dark ion-segment-button`) ganhou `--color-checked: yellow;--color: white!important;` para cores mais destacadas.

## [0.5.0] - 2025-06-19

### Added

- Estrutura da nova funcionalidade de adicionar favoritos.
- Serviço `.favorites;service.ts` com as principais funções.
- Customização das pages Home e Detail agora com a opção de favoritar.

## [0.4.0] - 2025-06-18

### Added

- Tema dark/light disponível no DetailPage e HomePage via `ThemeToggleComponent`.
- Animação de transição no gradiente do título (`.title-text-animation` antes o nome da classe era `.home-page-title`).
- Centralização da lógica de tema em `ThemeService`.
- Otimização do tamanho dos textos
- Centralização e redimensionamento das imagens dos Pokemons.

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

