import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CryptografiaService } from './cryptography.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  public sessionUser: boolean = false;

  constructor(
    private cryptografiaService: CryptografiaService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  public login(user: string, password: string): void {
    const crypto = this.cryptografiaService.encrypt({
      user: user,
      password: password,
    });
    this.localStorageService.save('user', crypto);
    this.router.navigate(['/']);
  }

  public isLogged(): boolean {
    const user = this.localStorageService.find('user');
    return user !== null;
  }

  public logout(): void {
    try {
      this.localStorageService.endSession();
    } catch (error) {
      console.log('ERRO = > não foi possivél encerrar a sessão: ', error);
    }
  }
}
