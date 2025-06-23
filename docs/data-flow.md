# Fluxo de dados

## Sequência Típica de Uso

1. **HomePage (inicial)**
   - Chama `PokemonService.listPokemons(offset, limit)`
   - Atualiza `pokemons[]`, e carrega `favSet` de `FavoritesService`

2. **Navegação para DetailPage**
   - Rota: `/detail/:name`
   - `DetailPage` injeta `ActivatedRoute` e chama `PokemonService.getPokemon(name)`
   - Monta array `images[]` e exibe carrossel

3. **Favoritos**
   - Em qualquer page, botão aciona `FavoritesService.toggleFavorite(name)`
   - Atualiza estado local (`isFav` ou `favSet`) e persiste

4. **Tema Dark/Light**
   - `ThemeToggleComponent` chama `ThemeService.toggle()`
   - `ThemeService` emite novo estado via BehaviorSubject
   - AppComponent aplica ou remove classe `.dark` no `<html>`
   - SCSS reage às variáveis CSS definidas
