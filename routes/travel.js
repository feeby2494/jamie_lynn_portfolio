const express = require('express');
const router = express.Router();


const travel_cards = [
  {
    title: "Republic of Korea",
    location: "Jeonju-shi, Jeollabuk-do, South Korea",
    img_path: "/img/",
    img_alt: "",
    desc: ""
  },
  {
    title: "Japan",
    location: "Tokyo and Osaka, Japan",
    img_path: "/img/",
    img_alt: "",
    desc: ""
  },
  {
    title: "",
    location: "",
    img_path: "/img/",
    img_alt: "",
    desc: ""
  }
];

// router.get('/', (req, res) => {
//
//
//   const fukuoka_touge = require("../data/travel/fukuoka.json");
//   const data = fukuoka_touge.data.trav_cards;
//
//   res.render('travel', {title: 'Jamie\'s Travels', travel_cards, data});
// });

router.get('/', (req, res) => {
  const id = req.query.id;
  const jsonFile = require("../data/travel/trips.json");
  const data = jsonFile.data.trip[id];
  const options = Object.keys(jsonFile.data.trip);
  function getMemoryName() {
    for (var i in options) {
      const optionName = options[i];
      const memoryName = jsonFile.data.trip[optionName].memoryId;
      return memoryName;
    }
  };
  //const memoryName = getMemoryName(options, jsonFile);

  console.log(id);
  console.log(data);
  console.log(options);
  console.log(getMemoryName());
  res.render('travel', {title: 'Jamie\'s Travels', travel_cards, data, options});
});

module.exports = router;
