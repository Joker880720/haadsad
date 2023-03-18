const express = require('express')
const router = express.Router()


router.get('/', function(req,res){
    res.send("這裡是routes根目錄")
});

router.get('/test', function(req,res){
    res.send('這裡是route測試')
});

module.exports = router;