import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { IonicModule } from '@ionic/angular';
import { ThemeToggleComponent } from 'src/app/shared/theme-toggle.componet';

import { addIcons } from 'ionicons';
import { heart, heartOutline, arrowBackCircleOutline, arrowForwardCircleOutline } from 'ionicons/icons';
import { FavoritesService } from 'src/app/core/services/favorites.service';

import { RouterLink } from '@angular/router';

import {
  CarouselComponent,
  CarouselControlComponent,
  CarouselInnerComponent,
  CarouselItemComponent
} from '@coreui/angular'

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
    ThemeToggleComponent,
    CarouselComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselControlComponent,
    RouterLink
  ],
})
export class DetailPage implements OnInit {
  slides: { src: string }[] = [];

  pokemon: any;
  images : string[] = [];

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
      console.log("Pokemon detal: ", data);

      // Monta o array de URL's a partir dos sprites
      this.images = [
        data.sprites.front_default,
        data.sprites.back_default,
        data.sprites.other['official-artwork'].front_default
      ].filter(url => !!url); // remove possíveis undefined

      // Slides para o carousel
      this.slides = this.images.map(src => ({ src }));
    });

    addIcons({ heart, heartOutline, arrowBackCircleOutline, arrowForwardCircleOutline })
  }

  toggleFavorite() {
    if (!this.pokemon) return;
    this.favService.toggleFavorite(this.pokemon.name);
    this.isFav = this.favService.isFavorite(this.pokemon.name);
  }
}
