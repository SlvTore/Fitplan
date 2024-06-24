const express = require('express');
const router = express.Router();
const accountController = require('../controllers/Account');
const auth = require('../middlewares/auth');

router.post('/register', accountController.register);
router.post('/login', accountController.login);
router.get('/accounts', auth, accountController.getAccounts);
router.get('/accounts/:id', auth, accountController.getAccountById);
router.patch('/accounts/:id', auth, accountController.updateAccount);
router.delete('/accounts/:id', auth, accountController.deleteAccount);

module.exports = router;
