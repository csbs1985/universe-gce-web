import { Injectable } from '@angular/core';
import { CryptografiaService } from './cryptography.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  save(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  find(key: string): string | null {
    return localStorage.getItem(key);
  }

  delete(key: string): void {
    localStorage.removeItem(key);
  }

  hasKey(key: string): boolean {
    const response = localStorage.getItem(key);
    return response !== null;
  }

  public endSession(): boolean {
    localStorage.removeItem('user');
    localStorage.removeItem('theme');
    return true;
  }
}
