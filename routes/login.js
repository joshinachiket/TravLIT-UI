const express = require('express');
const router = express.Router();
const homeController = require('../controllers/loginController')

router.get('/login', homeController.getLogin);
router.post('/login', homeController.postLogin);

module.exports = router;