const express = require('express');
const router = express.Router();

const skills = [
  'HTML5 and CSS3',
  'Flex Box, Grid, and Bootstrap',
  'Vanilla JavaScript',
  'jQuery',
  'AJAX and popular API\'s',
  'Accessibility',
  'HTML5 Video and Audio',
  'VLC video/audio conversion',
  'VTT Closed Captioning',
  'Web Development tools',
  'BASH terminal',
  'Linux and Mac OS X',
  'Node.js and NPM',
  'Apache web Server',
  'PHP',
  'Express Apps',
  'React.js',
  'SASS and LESS',
  'Web Mockups, InkScape, GIMP, and SVG\'s',
  'Git version control',
  'HTML Forms',
  'HTTP GET and POST methods',
  'Basic Networking and computer troubleshooting',
  'Macbook, Chromebook, and iPad repair'
];


router.get('/', (req, res) => {
  res.render('profile', {title: 'Jamie\'s Profile', skills });
});

module.exports = router;
