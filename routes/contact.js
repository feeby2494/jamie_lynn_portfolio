const express = require('express');
const router = express.Router();

const contact_info = {
    name: "Jamie Lynn",
    location: "Dallas, TX",
    main_email: "toby2494@hotmail.com",
    sec_email: "feeby2494@yahoo.co.jp",
    reddit: "",
    twitter: "",
    linkedin: "",
    cell: "972-697-6598",
    img_path: "/img/jamie_logo006_green.svg",
    img_alt: "Jamie's personal logo"
};

router.get('/', (req, res) => {
  res.render('contact', { name: req.cookies.username, contact_info});
});

router.post('/', (req, res) => {
  console.dir(req.body);
  res.cookie('username', req.body.username);
  res.render('contact', {name: req.body.username });
});

module.exports = router;
