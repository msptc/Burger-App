var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var router = express.Router();
var burger = require('../models/burger.js')

// default redirect to burger route
router.get('/', function(req, res){
    res.redirect('/burgers');
});

// get burger.js logic and call functions from it
router.get('/burgers', function(req, res){
    burger.selectAll(function(data){
        // render response through index.handlebars
        res.render('index', { burgers: data });
    });
});

router.post('/burgers/create', function(req, res){
    // calling insert function from burger.js
    burger.insertBurger('burger_name', req.body.name, function(){
        // redirects to mainpage after insert function
        res.redirect('/burgers')
    })
})

// update method
router.put('/burgers/update/devour/:id', function(req, res){

    burger.updateBurger('burgers', 'devoured', req.params.id, function(){

        res.redirect('/burgers');
    })
})

// delete method
router.delete('/burgers/delete/:id', function(req, res){

    burger.deleteBurger('burgers', req.params.id, function(){

        res.redirect('/burgers');
    })
})

// initial load
router.use(function(req, res){
    res.redirect('/burgers');
})

module.exports = router;