import {environment} from '../../environments/environment';

export default {
    oidc          : {
        clientId   : `${environment.CLIENT_ID}`,
        issuer     : `${environment.ISSUER}`,
        redirectUri: 'http://localhost:4200/implicit/callback',
        scopes     : ['openid', 'profile', 'email'],
        testing    : {
            disableHttpsCheck: `${environment.OKTA_TESTING_DISABLEHTTPSCHECK}`
        }
    }
};
