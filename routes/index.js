const express = require('express');
const router = express.Router();
const { User, Comments, Quiz, Product, Skintype } = require('../models');
const isValidToken = require('../middleware/isValidToken')
require('dotenv').config();
const Sequelize = require('sequelize');




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

//shayma - login route
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/logout', function(req, res, next) {
  res.cookie('jwt', '', {maxAge: 1});
  res.redirect('/');
});



// comments route
router.get('/comment',  function(req, res, next) {
  res.render('comment');
});


// router.get('/comment/:id', isValidToken, async function(req, res, next) {
//   const {id} = req.params;
//   const comments = await Comments.findOne({
//     where:{
//       id:id,
//     }
//   });
//   res.render('comment', { title: comments.title });
// });



//shayma - profile route -auth is work- middleware
router.get('/profile/:id', isValidToken, async function(req, res, next) {
  const {id} = req.params;
  const user = await User.findOne({
    where:{
      id:id
    }
  });
  res.render('profile', { name: user.username });
});


router.get('skintype/:id', isValidToken, async (req, res, next) => {
  const {id} = req.params;
  const user = await User.findOne({
    where: {
      id:id
    },
  })
  const products = await product.findAll({
    
  })
  res.render('profile', {user:user})
})

router.get('/quiz/:id', isValidToken, async (req, res, next) => {
  const {id} = req.params;
  const user = await User.findOne({
    where:{
      id: id
    },
  })
  res.render('profile', {user: user})
})



module.exports = router;
