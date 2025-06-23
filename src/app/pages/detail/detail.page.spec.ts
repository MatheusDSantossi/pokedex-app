import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailPage } from './detail.page';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { PokemonService } from 'src/app/core/services/pokemon.service';

describe('DetailPage', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), DetailPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => 'bulbasaur' } } },
        },
        {
          provide: PokemonService,
          useValue: {
            getPokemon: () =>
              of({
                id: 1,
                name: 'bulbasaur',
                sprites: {
                  /*...*/
                },
              }),
          },
        },
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DetailPage);
    const page = fixture.componentInstance;
    expect(page).toBeTruthy();
  });
});
