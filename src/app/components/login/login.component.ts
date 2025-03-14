import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onLogin() {
    // Implement your authentication logic here
    if (this.email === 'test@example.com' && this.password === 'energy123') {
      this.authService.login();
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials');
    }
  }

  showSignUp() {
    this.router.navigate(['/landing'], { queryParams: { view: 'signup' } });
  }
}