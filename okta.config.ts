import {environment} from './src/environments/environment';

export default {
  oidc: {
    clientId   : `${environment.OKTA_CLIENT_ID}`,
    issuer     : `${environment.OKTA_ISSUER}`,
    redirectUri: `${environment.OKTA_REDIRECT_URI}`,
    returnUrl  : `${environment.OKTA_RETURN_URL}`,
    ownerEmail : `${environment.OKTA_OWNER_EMAIL}`,
    scopes     : ['openid', 'profile', 'email'],
    testing    : {
      disableHttpsCheck: `${environment.OKTA_TESTING_DISABLEHTTPSCHECK}`
    }
  }
};
