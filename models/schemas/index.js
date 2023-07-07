const updateFavoriteSchema = require('./updateFavoriteSchema');
const {registerSchema, loginSchema,} = require('./userSchema');
const addSchema = require('./addSchema');
const subscriptionSchema = require('./subscriptionShema');
const emailSchema = require('./emailSchema');

module.exports = {
    updateFavoriteSchema,
    addSchema,
    registerSchema,
    loginSchema,
    subscriptionSchema,
    emailSchema,
}