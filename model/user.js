var mongoose = require("mongoose")
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");

var UserSchema = Schema ({
    email: String,
    password: String
});

UserSchema.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(password, 10) ;   
}

UserSchema.methods.validatePassword = function(userPassword) {
    return bcrypt.compare(userPassword, this.password) ;   
}

module.exports = mongoose.model('users', UserSchema);