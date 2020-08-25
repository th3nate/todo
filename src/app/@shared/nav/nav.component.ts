import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../@core/services/auth.service';

@Component({
  selector   : 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls  : ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isAuthenticated: boolean;

  constructor(public authService: AuthService) {
  }

  async ngOnInit() {
    this.isAuthenticated = await this.authService.checkAuthenticated();
  }

  async logout() {
    await this.authService.logout('/');
  }
}
