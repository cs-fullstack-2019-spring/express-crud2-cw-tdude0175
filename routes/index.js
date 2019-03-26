var express = require('express');
var router = express.Router();
var PostCollection =require("../models/PostSchema");
/* GET home page. */
router.get('/', function(req, res, next) {
  PostCollection.find((errors,results)=>
  {
    if(errors) res.send(errors);
    else
      {
        context=
            {
              title: 'Index',
              entries:results
            };
        res.render('index', context);
      }
  });
});
//renders the page with new data form
router.get('/newDataForm',(req,res)=>{res.render('newData')});
// saves the new form and redirects back to index
router.get('/saveData',(req,res)=>
{
  PostCollection.create(
      {
        userId: req.query.userId,
        id: req.query.id,
        title: req.query.title,
        body: req.query.body
      },(errors)=>
      {
        if(errors) res.send(errors);
        else res.redirect('/');
      });
});
// renders the edit form to be filled in
router.get('/editDataForm',(req,res)=>{res.render('updateData')});
// if the post exists it will save the updated data even if the title and body are empty
router.get('/updateData',(req,res)=>
{
  PostCollection.updateOne(
      {
        id: req.query.id
      },
      {
        title: req.query.title,
        body: req.query.body
      },(errors)=>
      {
        if(errors) res.send(errors);
        else res.redirect('/');
      });
});

module.exports = router;
