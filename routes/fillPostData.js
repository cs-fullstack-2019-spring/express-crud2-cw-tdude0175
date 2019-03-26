var express = require('express');
var router = express.Router();
var data = require('../bin/postData');
var PostSchema = require('../models/PostSchema');

router.get('/', (req, res)=> {
    PostSchema.create(data.postData, (error, results)=> {
        if(error) res.send(error);
        else res.send(results);
    });
});

module.exports = router;