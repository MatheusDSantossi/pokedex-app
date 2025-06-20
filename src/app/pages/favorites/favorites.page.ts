import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import {
  PokemonService,
  PokemonListItem,
} from 'src/app/core/services/pokemon.service';
import { FavoritesService } from 'src/app/core/services/favorites.service';

const PAGE_SIZE = 20;

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class FavoritesPage implements OnInit {
  allFavNames: string[] = [];
  pagedPokemons: PokemonListItem[] = [];
  page = 1;
  totalPages = 1;

  constructor(
    private favoriteService: FavoritesService,
    private pokeService: PokemonService
  ) {}

  ngOnInit() {
    // independente de quando os favoritos mudarem, recarrega a primeira página
    // this.favoriteService.getFavorites().subscribe((names) => {
    //   // this.allFavNames = names;
    //   this.page = 1;
    //   // this.updatePaged();
    // });
  }

  async updatedPaged() {
    this.totalPages = Math.ceil(this.allFavNames.length / PAGE_SIZE);
    const slice = this.allFavNames.slice(
      (this.page - 1) * PAGE_SIZE,
      this.page * PAGE_SIZE
    );
    // Pega a lista completa no PokemonListItems para aqueles nomes (ou ids)
    // this.pagedPokemons = await this.pokeService.getByNames(slice);
  }

  prev() {
    if (this.page > 1) {
      this.page--;
      this.updatedPaged();
    }
  }

  next() {
    if (this.page < this.totalPages) {
      this.page++;
      this.updatedPaged();
    }
  }
}
