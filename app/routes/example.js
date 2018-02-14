var express = require('express');
var router = express.Router();

router.get('/test', (req,res) =>{
    res.render('example');
});


module.exports = router;
