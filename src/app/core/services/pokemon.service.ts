import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface PokeListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
}

interface PokemonSprites {
  front_default: string;
  back_default: string;
  other: {
    'official-artwork': { front_default: string };
    dream_world: { front_default: string };
  };
}

export interface PokemonListItem {
  name: string;
  url: string;
}

interface PokemonDetail {
  id: number;
  name: string;
  sprites: PokemonSprites;
  types: { type: { name: string } }[];
  height: number;
  weight: number;
  abilities: { ability: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly API = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}
  // Lista de Pokemons com paginação
  listPokemons(offset = 0, limit = 20): Observable<PokeListResponse> {
    return this.http.get<PokeListResponse>(
      `${this.API}/pokemon?offset=${offset}&limit=${limit}`
    );
  }

  // Detalhes de um Pokemon por nome ou ID
  getPokemon(nameOrId: string | number): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(`${this.API}/pokemon/${nameOrId}`);
  }
}
