const express = require('express');

const ctrl = require('../../controllers/auth')

const { validation, authenticate, upload } = require('../../middleware');

const {schemas} = require('../../models/user');

const router = express.Router();

router.post('/register', validation(schemas.registerSchema), ctrl.register);

router.get('/verify/:verificationToken', ctrl.verifyEmail);

router.post('/verify', validation(schemas.verifySchema), ctrl.resendVerifyEmail)

router.post('/login', validation(schemas.loginSchema), ctrl.login);

router.get('/current', authenticate, ctrl.getCurrent);

router.post('/logout', authenticate, ctrl.logout);

router.patch('/', authenticate, ctrl.updateSubscriptionUser);

router.patch('/avatars', authenticate, upload.single('avatar'), ctrl.updateAvatar)

module.exports = router;
