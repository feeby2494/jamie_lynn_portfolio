const express = require('express');
const router = express.Router();

const selected_json = '../data/portfolio_cards.json';
const data = require(selected_json).data;
const cards = data.port_cards; // cosnt cards = data.port_cards;
const campaign = data.campaign; //const { campaign } = data;
const title = data.title; //cosnt { title } = data;
const url = require('url');



function Card_portfolio(title, img_path, img_alt, desc) {
  this.title = " ";
  this.img_path = " ";
  this.img_alt = " ";
  this.desc = " ";
}

var jacob_art_card = new Card_portfolio("Jacob's Art Portfolio", "/public/img/jacob_art.jpg", "Jacob's inspiring artwork", "Jacob's artwork and multimedia is true art in that it provides inner peace to the disturbed, while disturbing the sane.");
var nick_repair_card = new Card_portfolio("Nick's Computer Repair", "/public/img/nick_repair.jpg", "Nick and his customer's computers", "Nick is a gifted computer technician and provides both IT and repair services. Consult with him today and get a free quote!");
var jamie_advan_card = new Card_portfolio("Jamie's Adventures", "/public/img/jamie_advan.jpg", "Jamie in Korea", "Follow me, Jamie Lynn, as I travel and explore amazing places like South Korea and experience the culture with me!");
var jamie_car_card = new Card_portfolio("Jamie's Car DIY Projects", "/public/img/jamie_and_Corolla.jpg", "Jamie and his Toyota Corolla", "Learn to work on cars with me! Save money on repairs, become self-empowered, and make your cheap daily both reliable and exciting! Happy modding!");

var cards_for_portfolio = [
  jacob_art_card,
  nick_repair_card,
  jamie_advan_card,
  jamie_car_card
]


const portfolio_cards = [
  {
    port_title: "Jacob's Art Portfolio",
    img_path: "/public/img/jacob_art.jpg",
    img_alt: "Jacob's artwork",
    desc: "Jacob's artwork and multimedia is true art in that it provides inner peace to the disturbed, while disturbing the sane."
  },
  {
    port_title: "Nick's Computer Repair",
    img_path: "/public/img/nick_repair.jpg",
    img_alt: "Nick and his customer's computers",
    desc: "Nick is a gifted computer technician and provides both IT and repair services. Consult with him today and get a free quote!"
  },
  {
    port_title: "Jamie's Adventures",
    img_path: "/public/img/jamie_advan.jpg",
    img_alt: "Jamie in Korea",
    desc: "Follow me, Jamie Lynn, as I travel and explore amazing places like South Korea and experience the culture with me!"
  },
  {
    port_title: "Jamie's Car DIY Projects",
    img_path: "/public/img/jamie_and_Corolla.jpg",
    img_alt: "Jamie and his Toyota Corolla",
    desc: "Learn to work on cars with me! Save money on repairs, become self-empowered, and make your cheap daily both reliable and exciting! Happy modding!"
  }
];


router.get('/scsc', (req, res) => {

  var card_title = [];
  // console.dir(portfolio_cards);
  // console.dir(cards_for_portfolio);
  res.render('portfolio', {title: title, cards: cards, campaign: campaign, portfolio_cards, cards_for_portfolio, id});
});

router.get('/', (req, res) => {
  const id = req.query.id;
  if (id === "undefined"){
    id = corolla;
  }
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
