import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule, ViewWillEnter } from '@ionic/angular';
import {
  PokemonService,
  PokemonListItem,
} from '../../core/services/pokemon.service';
import { addIcons } from 'ionicons';
import {
  sunny,
  moon,
  arrowForward,
  arrowBack,
  heart,
  heartOutline,
} from 'ionicons/icons';
import { ThemeToggleComponent } from 'src/app/shared/theme-toggle.componet';
import { FavoritesService } from 'src/app/core/services/favorites.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, FormsModule, ThemeToggleComponent],
})

export class HomePage implements OnInit, ViewWillEnter {
  pokemons: PokemonListItem[] = [];
  next: string | null = null;
  previous: string | null = null;
  // Estado local do tema
  isDarkMode: boolean = false;

  // Novo controle de paginação
  offset = 0;
  readonly limit = 20;

  favSet = new Set<string>();

  segment: 'all' | 'favorites' = 'all';

  constructor(
    private pokemonService: PokemonService,
    private favService: FavoritesService
  ) {}

  ngOnInit() {
    this.loadPage();
  }

  // Este irá rodar toda vez que a página entra em foco
  ionViewWillEnter(): void {
    this.loadFavorites();
  }

  private loadFavorites() {
    const favs = this.favService.getAll();
    this.favSet = new Set(favs);
  }

  toggleDarkModeHandler = () => {
    this.isDarkMode = !this.isDarkMode;
    const elem = document.documentElement;
    elem.classList.toggle('dark', this.isDarkMode);
  };

  extractId(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }

  loadPage(url: string | null = null) {
    const params = url
      ? new URL(url).searchParams
      : new URL(`${this.pokemonService['API']}/pokemon?offset=0&limit=20`)
          .searchParams;

    const offset = params.get('offset') ?? '0';
    const limit = params.get('limit') ?? '20';

    this.pokemonService.listPokemons(+offset, +limit).subscribe((res) => {
      this.pokemons = res.results;
      this.next = res.next;
      this.previous = res.previous;
      this.loadFavorites(); // atualiza corações depois da listagem
    });


    addIcons({ sunny, moon, arrowForward, arrowBack, heart, heartOutline });
  }

  // Retorna a lista que deve ser renderiazada no *ngFor
  get displayedPokemons(): PokemonListItem[] {
    return this.segment === 'favorites' ? this.pokemons.filter(p => this.favSet.has(p.name)) :
    this.pokemons;
  }

  // liga/desliga o filtro de favoritos
  segmentChanged() {}
}
