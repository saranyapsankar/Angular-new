import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  isLoginVisible: boolean = true;
  isSignUpVisible: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['view'] === 'signup') {
        this.showSignUp();
      } else {
        this.showLogin();
      }
    });
  }

  showLogin() {
    this.isLoginVisible = true;
    this.isSignUpVisible = false;
  }

  showSignUp() {
    this.isLoginVisible = false;
    this.isSignUpVisible = true;
  }
}