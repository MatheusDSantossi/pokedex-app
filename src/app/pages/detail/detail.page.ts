import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { IonicModule } from '@ionic/angular';
import { ThemeToggleComponent } from 'src/app/shared/theme-toggle.componet';
import { lastValueFrom } from 'rxjs';

import { addIcons } from 'ionicons';
import { heart, heartOutline } from 'ionicons/icons';
import { FavoritesService } from 'src/app/core/services/favorites.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ThemeToggleComponent
  ],
})
export class DetailPage implements OnInit {
  pokemon: any;
  isFav = false;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private favService: FavoritesService
  ) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name')!;
    this.pokemonService.getPokemon(name).subscribe(data => {
      this.pokemon = data;
      this.isFav = this.favService.isFavorite(name);
    });

    addIcons({ heart, heartOutline })
  }

  toggleFavorite() {
    if (!this.pokemon) return;
    this.favService.toggleFavorite(this.pokemon.name);
    this.isFav = this.favService.isFavorite(this.pokemon.name);
  }
}
