const express = require('express');

const ctrl = require('../../controllers');

const { validateBody, authenticate } = require('../../middlewares');

const {schemas} = require('../../models');

const router = express.Router();

router.post('/register', validateBody(schemas.registerSchema), ctrl.users.register);

router.get('/verify/:verificationToken', ctrl.users.verifyEmail);

router.post('/verify', validateBody(schemas.emailSchema), ctrl.users.resendVerifyEmail);

router.post('/login', validateBody(schemas.loginSchema), ctrl.users.login);

router.get('/current', authenticate, ctrl.users.getCurrent);

router.post('/logout', authenticate, ctrl.users.logout);

router.patch("/:id", validateBody(schemas.subscriptionSchema), ctrl.users.updateSubscription);

module.exports = router;