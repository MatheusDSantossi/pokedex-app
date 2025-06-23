import { TestBed } from '@angular/core/testing';
import { FavoritesService } from './favorites.service';

describe('FavoritesService', () => {
  let service: FavoritesService;

  beforeEach(() => {
    // limpa o localstorage antes de cada teste
    localStorage.clear();

    TestBed.configureTestingModule({
      providers: [FavoritesService]
    });

    service = TestBed.inject(FavoritesService);
  });

  it('should start with empty favorites', () => {
    expect(service.getAll()).toEqual([]);
  });

  it('should toggle favorite on and off', () => {
    service.toggleFavorite('pikachu');
    expect(service.isFavorite('pikachu')).toBeTrue();
    expect(service.getAll()).toEqual(['pikachu']);

    service.toggleFavorite('pikachu');
    expect(service.isFavorite('pikachu')).toBeFalse();
    expect(service.getAll()).toEqual([]);
  });
});
