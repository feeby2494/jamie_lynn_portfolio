const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const userData = require('../models/user');
const MongoClient = require('mongodb').MongoClient; // need this!

const hashCount = 10;


// setup database with MongoClient
MongoClient.connect("mongodb://admin:mj1268Alizee@ds115193.mlab.com:15193/totorolla", (err, client) => {
  if (err) {
    return console.error(err);
  }
  const db = client.db('totorolla');

  // GET /signup how in the hell is this a 404?
  router.get('/', (req, res, next) => {
    return res.render('signup', { title: 'Sign Up'  });
    console.log('This signup route works');
  });

  // POST /signup
  router.post('/', (req, res, next) => {

    // test to make sure all fields are complete
    if (req.body.email &&
        req.body.name &&
        req.body.favoriteCar &&
        req.body.password &&
        req.body.confirmPassword) {
          // confirm that passwords match up
          if (req.body.password !== req.body.confirmPassword) {
            const err = new Error('Passwords don\'t match!');
            err.status = 400;
            return next(err);
          }
          // create odject with form input});
          const userData = {
            email: req.body.email,
            name: req.body.name,
            favoriteCar: req.body.favoriteCar,
            password: req.body.password
          };
          // save userData to user collection
          db.collection('users', (req, res) => {
            if (err) {
              const err = new Error('Mondo DB connection error');
              err.status = 400;
              return next(err);
            }
            // hash password
            bcrypt.hash(userData.password, hashCount, function(err, hash) {
              if (err) {
                return next(err);
              }
              userData.password = hash;
              console.log('saved to database');
              db.collection('users').save(userData); // collection.save is deprecated. Use insertOne, insertMany, updateOne, or updateMany instead.
              // res.redirect('/?user=' + userData.name);
            });

          });
    } else {
      const err = new Error('All fields required');
      err.status = 400;
      return next(err);
    }
  });
});

module.exports = router;
