const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

// setup database with MongoClient
MongoClient.connect("mongodb://admin:mj1268Alizee@ds115193.mlab.com:15193/totorolla", (err, client) => {
  if (err) {
    return console.error(err);
  }
  const db = client.db('totorolla');

  // setting up querystrings
  router.get('/', (req, res, next) => {
    let id = req.query.id;
    if (id === undefined){
      res.redirect('/portfolio/corolla');
    }
    // console.log(id);
    next();
  });

  router.get('/corolla', (req, res) => {
    db.collection('corolla').find().toArray((err, result) => {
      if(err) {
        const err = new Error('Can\'t get info from database!');
        err.status = 400;
        return next(err);
      }
      // res.send('<p>some html</p>');
      res.render('portfolio', {title: "Corolla", cards: result});
    });
  });

  router.get('/civic', (req, res) => {
    db.collection('civic').find().toArray((err, result) => {
      if(err) {
        const err = new Error('Can\'t get info from database!');
        err.status = 400;
        return next(err);
      }
      res.render('portfolio', {title: "Civic", cards: result});
    });
  });

  router.get('/hacking', (req, res) => {
    db.collection('hacking').find().toArray((err, result) => {
      if(err) {
        const err = new Error('Can\'t get info from database!');
        err.status = 400;
        return next(err);
      }
      res.render('portfolio', {title: "Hacking", cards: result});
    });
  });

  router.get('/webdev', (req, res) => {
    db.collection('webdev').find().toArray((err, result) => {
      if(err) {
        const err = new Error('Can\'t get info from database!');
        err.status = 400;
        return next(err);
      }
      res.render('portfolio', {title: "WebDev", cards: result});
    });
  });

  router.post('/', (req, res) => {
    res.cookie('username', req.body.name);
    res.cookie('email', req.body.email);
    res.cookie('description', req.body.brief_desc);
    res.render('portfolio', { title: req.cookies.username, email: req.cookies.email, brief_desc: req.cookies.brief_desc });
  });
});

module.exports = router;
