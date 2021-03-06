import { Component, OnInit } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: SocialUser |any;
  GoogleLoginProvider = GoogleLoginProvider;

  constructor(private authService: SocialAuthService) {
  }

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

 signOut(){
   this.authService.signOut();
 }
 refreshGoogleToken(): void {
  this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
}

}
