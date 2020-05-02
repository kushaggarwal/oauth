const passport = require('passport')

const keys = require("./key")

const googleStrategy = require('passport-google-oauth20')

passport.use(new googleStrategy({

    callbackURL: "/auth/google/redirect",
    clientID: '815222678133-2ervefrdand7fehq0fvbpcgj1tiac2fa.apps.googleusercontent.com',
    clientSecret: 'AIKicFVnGKRBZxsmh19ikY4C'
}, () => {
    //callback
    //console.log(profile)

}))


