# Arquitetura e Componentes

```mermaid
graph LR
  subgraph Core
    PS[PokemonService] -->|HTTP| PokeAPI
    FS[FavoritesService] -->|localStorage| Browser
    TS[ThemeService] -->|BehaviorSubject| AppComponent
  end

  subgraph UI
    HomePage --> PS
    HomePage --> FS
    DetailPage --> PS
    DetailPage --> FS
    FavoritesPage --> FS
    HomePage --> ThemeToggleComponent
    DetailPage --> ThemeToggleComponent
  end
```

## Camadas

### Core/Services

- PokemonService → consome PokeAPI

- FavoritesService → gerencia favoritos no localStorage

- ThemeService → troca tema via BehaviorSubject e CSS vars

### Pages

- HomePage → listagem + paginação + filtro

- DetailPage → detalhes + carrossel de sprites + favoritos

- FavoritesPage → lista dos Pokémon marcados

### Shared Components

- ThemeToggleComponent → botão de alternância de tema
