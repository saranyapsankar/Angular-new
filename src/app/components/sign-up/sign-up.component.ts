import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSignUp() {
    // Implement your sign-up logic here
    // For simplicity, we'll just log the user in and navigate to home
    localStorage.setItem('loggedIn', 'true');
    this.router.navigate(['/home']);
  }

  showLogin() {
    this.router.navigate(['/landing'], { queryParams: { view: 'login' } });
  }
}