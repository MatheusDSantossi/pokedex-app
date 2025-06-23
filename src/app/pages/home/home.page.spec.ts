import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { of } from 'rxjs';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let mockService: Partial<PokemonService>;

  beforeEach(async () => {
    mockService = {
      listPokemons: () => of({ count: 1, results: [{ name: 'bulbassaur', url: '' }], next: null, previous: null })
    };

    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), HomePage],
      providers: [{
        provide: PokemonService,
        useValue: {
          API: 'https://pokeapi.co/api/v2',
          listPokemons: mockService
        }
      }
    ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render pokemons list', () => {
    const compile = fixture.nativeElement as HTMLElement;
    expect(compile.querySelector('ion-item')).toBeTruthy();
    expect(compile.textContent).toContain('bulbasaur');
  });
});
