import {Component, OnInit} from '@angular/core';
import {OktaAuthService} from '@okta/okta-angular';
import {Router} from '@angular/router';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit {
    isAuthenticated: boolean;

    constructor(public oktaAuth: OktaAuthService, private readonly router: Router) {
        this.oktaAuth.$authenticationState.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
    }

    async ngOnInit() {
        this.isAuthenticated = await this.oktaAuth.isAuthenticated();
        if (!!this.isAuthenticated) {
            await this.router.navigate(['board']);
            return false;
        }
    }

    async logout() {
        await this.oktaAuth.logout('/');
    }

}
