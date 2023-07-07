const {ctrlWrapper} = require('../../helpers');
const register = require('./auth');
const resendVerifyEmail = require('./resendVerifyEmail');
const verifyEmail = require('./verifyEmail');
const login = require('./login');
const getCurrent = require('./getCurrent');
const logout = require('./logout');
const updateSubscription = require('./updateSubscription');
const updateAvatar = require('./updateAvatar');

module.exports = {
    register: ctrlWrapper(register),
    resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
    verifyEmail: ctrlWrapper(verifyEmail),
    login: ctrlWrapper(login),
    getCurrent: ctrlWrapper(getCurrent),
    logout: ctrlWrapper(logout),
    updateSubscription: ctrlWrapper(updateSubscription),
    updateAvatar: ctrlWrapper(updateAvatar),
}