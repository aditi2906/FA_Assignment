import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  public userDetails: any;
  constructor(
    private authService: SocialAuthService,
    private router: Router,
  ) { }


  ngOnInit(): void {
    const storage = localStorage.getItem('google_auth');

    if (storage) {
      this.userDetails = JSON.parse(storage);
    } else {
      this.signOut();
    }
  }
  signOut(): void {
    localStorage.removeItem('google_auth');
    this.router.navigateByUrl('/').then();
  }

}
