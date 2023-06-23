const schemas = require('./schemas')
const Contact = require('./mongoSchema/contact');
const User = require('./mongoSchema/user');

module.exports = { 
    schemas,
    Contact,
    User,
}