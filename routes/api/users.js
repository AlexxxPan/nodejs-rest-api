const express = require('express');

const ctrl = require('../../controllers');

const { authenticate, upload } = require('../../middlewares');

const router = express.Router();

router.patch("/avatars", authenticate, upload.single("avatar"), ctrl.users.updateAvatar);

module.exports = router;