import {Component, OnInit} from '@angular/core';
import config from '../../okta.config';
import {Router} from '@angular/router';
import {AuthService} from './@core/services/auth.service';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isAuthenticated: boolean;

  constructor(private authService: AuthService, private router: Router) {
  }

  async ngOnInit() {
    this.isAuthenticated = await this.authService.checkAuthenticated();
    if (this.isAuthenticated) {
      await this.router.navigate([config.oidc.returnUrl]);
    }
  }
}
