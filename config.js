  // Don't commit this file to your public repos. This config is for first-run
  //
 exports.creds = {
 	returnURL: 'https://edisga-openid.azurewebsites.net/auth/openid/return',
 	identityMetadata: 'https://login.microsoftonline.com/edisga.onmicrosoft.com/.well-known/openid-configuration', // For using Microsoft you should never need to change this.
 	clientID: 'bb6f5582-b837-4837-85d7-09bd70f42034',
 	clientSecret: 'FeVjtlIWXE9KAT+HhHg0qL5jaLnZ3bMAJO1ZzfXIXxQ=', // if you are doing code or id_token code
 	skipUserProfile: true, // for AzureAD should be set to true.
 	responseType: 'code id_token', // for login only flows use id_token. For accessing resources use `id_token code`
	responseMode: 'form_post', // For login only flows we should have token passed back to us in a POST
	 // Required if you will use http for redirectUrl
 	allowHttpForRedirectUrl: true,
 	//scope: ['email', 'profile'] // additional scopes you may wish to pass
 };
