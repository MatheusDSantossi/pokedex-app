import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { sunny, moon } from 'ionicons/icons';
import { ThemeToggleComponent } from 'src/app/shared/theme-toggle.componet';

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

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name')!;
    this.pokemonService.getPokemon(name).subscribe((data) => {
      this.pokemon = data;
      console.log("Pokémon detail: ", data)
    });
  }
}
