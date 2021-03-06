const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

// setup database with MongoClient
MongoClient.connect("mongodb://admin:mj1268Alizee@ds115193.mlab.com:15193/totorolla", (err, client) => {
  if (err) {
    return console.error(err);
  }
  const db = client.db('totorolla');

  router.get('/', (req, res, next) => {
    let id = req.query.id;
    if (id === undefined){
      res.redirect('/travel/korea');
    }
    // console.log(id);
    next();
  });

  router.get('/korea', (req, res, next) => {
    db.collection('korea').find().toArray( (err, result) => {
      if(err) {
        const err = new Error('Can\'t get info from database!');
        err.status = 400;
        return next(err);
      }
      res.render('travel', {title: "Korea", cards: result});
    });
  });

  router.get('/japan', (req, res) => {
    db.collection('japan').find().toArray((err, result) => {
      if(err) {
        const err = new Error('Can\'t get info from database!');
        err.status = 400;
        return next(err);
      }
      // res.send('<p>some html</p>');
      res.render('travel', {title: "Japan", cards: result});
    });
  });

  router.get('/uk', (req, res) => {
    db.collection('uk').find().toArray((err, result) => {
      if(err) {
        const err = new Error('Can\'t get info from database!');
        err.status = 400;
        return next(err);
      }
      // res.send('<p>some html</p>');
      res.render('travel', {title: "UK", cards: result});
    });
  });

  router.get('/usa', (req, res) => {
    db.collection('usa').find().toArray((err, result) => {
      if(err) {
        const err = new Error('Can\'t get info from database!');
        err.status = 400;
        return next(err);
      }
      // res.send('<p>some html</p>');
      res.render('travel', {title: "USA", cards: result});
    });
  });

  // Old stuff
  // router.get('/', (req, res) => {
  //   const id = req.query.id;
  //   const jsonFile = require("../data/travel/trips.json");
  //   const data = jsonFile.data.trip[id];
  //   const options = Object.keys(jsonFile.data.trip);
  //   function getMemoryName() {
  //     for (var i in options) {
  //       const optionName = options[i];
  //       const memoryName = jsonFile.data.trip[optionName].memoryId;
  //       return memoryName;
  //     }
  //   };
  //   //const memoryName = getMemoryName(options, jsonFile);
  //
  //   console.log(id);
  //   console.log(data);
  //   console.log(options);
  //   console.log(getMemoryName());
  //   res.render('travel', {title: 'Jamie\'s Travels', travel_cards, data, options});
  // });
});

module.exports = router;
