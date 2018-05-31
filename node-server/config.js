 // Don't commit this file to your public repos. This config is for first-run
 exports.creds = {
    mongoose_auth_local: 'mongodb://localhost/tasklist', // Your mongo auth uri goes here
    clientID: '5005adad-2444-4d95-a0ee-580be002ce1c',
    // Required, the reply URL registered in AAD for your app
    redirectUrl: 'http://localhost:3000/auth/openid/return',
    identityMetadata: 'https://login.microsoftonline.com/tmoaad.onmicrosoft.com/.well-known/openid-configuration', // This is customized for your tenant.
    // You may use the common endpoint for multi-tenant scenarios
    // if you do, make sure you set validateIssuer to false and specify an audience
    // as you won't get this from the Identity Metadata
    //
    //identityMetadata: 'https://login.microsoftonline.com/common/.well-known/openid-configuration',
    validateIssuer: true, // if you have validation on, you cannot have users from multiple tenants sign in
    passReqToCallback: false,
    loggingLevel: 'info' // valid are 'info', 'warn', 'error'. Error always goes to stderr in Unix.
 };

 // If you want to use the mongoDB session store for session middleware; otherwise we will use the default
// session store provided by express-session.
// Note that the default session store is designed for development purpose only.
exports.useMongoDBSessionStore = true;

// If you want to use mongoDB, provide the uri here for the database.
exports.databaseUri = 'mongodb://localhost/OIDCStrategy';

// How long you want to keep session in mongoDB.
exports.mongoDBSessionMaxAge = 24 * 60 * 60;  // 1 day (unit is second)