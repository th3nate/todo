import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {OktaAuthService} from '@okta/okta-angular';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private readonly router: Router, public oktaAuth: OktaAuthService) { }

    async canActivate(): Promise<boolean> {
        const isAuthenticated = await this.oktaAuth.isAuthenticated();

        if (!isAuthenticated) {
            await this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
