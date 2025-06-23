import { TestBed } from '@angular/core/testing';

import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpMock: HttpTestingController;
  const API = 'https://pokeapi.co/api/v2';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting]
    });

    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // garante que não há requisições pendentes
  });

  it('should list pokemons with pagination params', () => {
    const mockResponse = {
      count: 1118,
      next: `${API}/pokemon?offset=20&limit=20`,
      previous: null,
      results: [{ name: 'bulbasaur', url: `${API}/pokemon/1/` }]
    };

    service.listPokemons(0, 20).subscribe(res => {
      expect(res.count).toBe(1118);
      expect(res.results.length).toBe(1);
      expect(res.results[0].name).toBe('bulbasaur');
    });

    const req = httpMock.expectOne(`${API}/pokemon?offset=0&limit=20`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should get pokemon detail by name', () => {
    const detailMock = { id: 1, name: 'bulbasaur', sprites: {} };

    service.getPokemon('bulbasaur').subscribe(data => {
      expect(data.id).toBe(1);
      expect(data.name).toBe('bulbasaur');
    });

    const req = httpMock.expectOne(`${API}/pokemon/bulbasaur`);
    expect(req.request.method).toBe('GET');
    req.flush(detailMock);
  });
});
