# Contratos da PokeAPI

## GET /pokemon

```json
{
  "count": 1302,
  "next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
  "previous": null,
  "results": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    }
  ]
}
```

## GET /pokemon/{nameOrId}

```json
{
  "id": 1,
  "name": "bulbasaur",
  "sprites": {
    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "back_default": "...",
    "other": {
      "official-artwork": {
        "front_default": "..."
      }
    }
  },
  "abilities": [...],
  "stats": [...]
}
```

## Endpoints Internos

### FavoritesService

-getAll(): string[]

- isFavorite(name: string): boolean

- toggleFavorite(name: string): void

### ThemeService

- isDark(): boolean

- toggle(): void
