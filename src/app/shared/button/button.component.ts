import { Component, OnInit , Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() label: string | undefined;
  @Input() img: string | undefined;
  @Input() alt: string | undefined;
  user: SocialUser |any;
  GoogleLoginProvider = GoogleLoginProvider;
  constructor(
    private dialog: MatDialog,
    private authService: SocialAuthService,
    private router: Router,
  ) { }

  public userDetails: any;
  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
    });
    const storage = localStorage.getItem('google_auth');

    if (storage) {
      this.userDetails = JSON.parse(storage);
    } else {
      this.signOut();
    }
  }

  googleLoginOptions = {
    scope: 'profile email'
  };
 signInWithGoogle() {
  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID,this.googleLoginOptions).then((data) => {
    localStorage.setItem('google_auth', JSON.stringify(data));
    this.router.navigateByUrl('/panel').then();
   });
 }
  // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig
  
  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID, this.googleLoginOptions ).then((data) => {
  //     console.log(data);
  //     this.router.navigate(['dashboard']);
  //   }).catch(data => {
  //     this.authService.signOut();
  //     this.router.navigate(['dashboard']);
  //   });}

  signOut(): void {
    localStorage.removeItem('google_auth');
    this.router.navigateByUrl('/').then(this.refreshGoogleToken);
  }
 refreshGoogleToken(): void {
  this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
}


}

