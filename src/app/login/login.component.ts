import {Component, OnInit} from '@angular/core';
import config from '../auth/okta.config';
import * as OktaSignIn from '@okta/okta-signin-widget';

@Component({
    selector   : 'app-login',
    templateUrl: './login.component.html',
    styleUrls  : ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    signIn: OktaSignIn;

    constructor() {
        this.signIn = new OktaSignIn({
            baseUrl    : config.oidc.issuer.split('/oauth2')[0],
            clientId   : config.oidc.clientId,
            redirectUri: config.oidc.redirectUri,
            i18n       : {
                en: {
                    'primaryauth.title': 'Sign in',
                },
            },
            authParams : {
                pkce        : true,
                responseMode: 'query',
                issuer      : config.oidc.issuer,
                display     : 'page',
                scopes      : config.oidc.scopes,
            },
        });
    }

    ngOnInit() {
        this.signIn.renderEl(
            {el: '#sign-in-widget'},
            () => {
            },
            (err) => {
                throw err;
            }
        );
    }

}
