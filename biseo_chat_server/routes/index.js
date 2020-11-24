const express = require('express')

const auth = require('../controllers/auth.js')

const router = express.Router()

router.get('/auth/check', auth.authCheck)
router.post('/login', auth.login)
router.get('/login/callback', auth.loginCallback)
router.get('/',(req,res) => {
    res.send ('server is up and running');
    
    // res.set('Access-Control-Rquest-Method','*');
    // res.method = req.header['Access-control-request-method'];
    // res.set({'access-control-allow-origin': '*'});

});

module.exports = router

