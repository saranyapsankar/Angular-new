import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  login() {
    this.isAuthenticated = true;
    localStorage.setItem('loggedIn', 'true');
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('loggedIn');
  }

  getAuthStatus() {
    return this.isAuthenticated || localStorage.getItem('loggedIn') === 'true';;
  }
}
