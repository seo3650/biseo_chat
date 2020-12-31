const express = require('express')

const auth = require('../controllers/auth.js')

const router = express.Router()

router.post('/login', auth.login)
router.get('/login/callback', auth.loginCallback)
router.get('/',(req,res) => {
    res.send ('server is up and running');
});

module.exports = router

