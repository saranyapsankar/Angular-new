import { Component, afterRender, OnInit, AfterViewInit, signal, effect, computed } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from 'src/app/shared/models/components/button.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  password: string = '';
  emailControl = new FormControl('');
  email = signal(this.emailControl.value || ''); 
  constructor(private router: Router) {
    afterRender(
     { earlyRead: () => console.log('Render phase: earlyRead'),
      read: () => console.log('Render phase: read'),
      mixedReadWrite: () => console.log('Render phase: mixedReadWrite'),
      write: () => console.log('Render phase: write')
     }
  ); 

  this.emailControl.valueChanges.subscribe(value => this.email.set(value));
    effect(() => {
      console.log(`Email changed: ${this.email()}`);
    });
  }

  ngOnInit() {
    console.log('Component initialized!');
  }

  ngAfterViewInit() {
    console.log('View initialized!');
  }
  onSignUp() {
    localStorage.setItem('loggedIn', 'true');
    this.router.navigate(['/home']);
  }

  showLogin() {
    this.router.navigate(['/landing'], { queryParams: { view: 'login' } });
  }

 validateEmail(email: string): boolean {
  return this.emailRegex.test(email);
 }
nameValid = computed(() => this.validateEmail(this.email()));
  
}