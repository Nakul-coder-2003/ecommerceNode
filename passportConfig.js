import LocalStrategy from "passport-local";
import userModel from "./models/userModels.js";

export const initializePassport = (passport)=>{
    passport.use(new LocalStrategy(
        function(username, password, done) {
          userModel.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
          });
        }
    ));
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    passport.deserializeUser(function(id, done) {
        userModel.findById(id, function (err, user) {
          done(err, user);
        });
    });
}