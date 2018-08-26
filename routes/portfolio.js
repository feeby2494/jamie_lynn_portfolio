const express = require('express');
const router = express.Router();

const selected_json = '../data/portfolio_cards.json';
const data = require(selected_json).data;
const cards = data.port_cards; // cosnt cards = data.port_cards;
const campaign = data.campaign; //const { campaign } = data;
const title = data.title; //cosnt { title } = data;
const url = require('url');

router.get('/scsc', (req, res) => {
  res.render('portfolio', {title: title, cards: cards, campaign: campaign, id});
});

router.get('/', (req, res) => {
  let id = req.query.id;
  // if (id === undefined){
  //   return id = "corolla";
  // }
  console.log(id);

  const selected_json = '../data/portfolio/' + id + '.json';
  console.log(selected_json);
  const data = require(selected_json).data;
  const cards = data.port_cards; // cosnt cards = data.port_cards;
  const campaign = data.campaign; //const { campaign } = data;
  const title = data.title; //cosnt { title } = data;

  res.render('portfolio', {title: title, cards: cards, campaign: campaign});
});



// router.get('/:id' (req, res) => {
//   res.render('portfolio', {
//     popup_text: cards[req.params.id].desc,
//     popup_image: cards[req.params.id].popup_img_array
//   });
// });

// router.get('/portfolio', (req, res) => {
//   res.render('portfolio');
// });

router.post('/', (req, res) => {


  res.cookie('username', req.body.name);
  res.cookie('email', req.body.email);
  res.cookie('description', req.body.brief_desc);
  res.render('portfolio', { title: req.cookies.username, email: req.cookies.email, brief_desc: req.cookies.brief_desc });
});

module.exports = router;
