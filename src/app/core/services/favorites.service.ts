import { Injectable } from '@angular/core';

const FAVORITES_KEY = 'favorites';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  // Retorna o array de nomes salvos
  private getStoredList(): string[] {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  // Persiste o array
  private saveList(list: string[]) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(list));
  }

  // Lista todos
  getAll(): string[] {
    return this.getStoredList();
  }

  // Verifica se já está favoritado
  isFavorite(name: string): boolean {
    return this.getStoredList().includes(name);
  }

  // Adiciona ou remove
  toggleFavorite(name: string): void {
    const list = this.getStoredList();
    const idx = list.indexOf(name);

    if (idx >= 0) {
      list.splice(idx, 1);
    } else {
      list.push(name);
    }
    this.saveList(list);
  }
}
