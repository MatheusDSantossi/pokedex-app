import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {
  PokemonService,
  PokemonListItem,
} from '../../core/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
})
export class HomePage implements OnInit {
  pokemons: PokemonListItem[] = [];
  next: string | null = null;
  previous: string | null = null;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPage();
  }

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
    });
  }
}
