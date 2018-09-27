const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const MongoClient = require('mongodb').MongoClient;

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'data')));

//app.get()
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



//Require routes
const profileRoutes = require('./routes/profile');
const portRoutes = require('./routes/portfolio');
const travelRoutes = require('./routes/travel');
const contactRoutes = require('./routes/contact');
const signup = require('./routes/signup');

//Middleware for Routes
app.use('/', profileRoutes);
app.use('/portfolio', portRoutes);
app.use('/travel', travelRoutes);
app.use('/contact', contactRoutes);
app.use('/signup', signup);

// app.get('/data/travel_add_bottom_page.json', (req, res) => {
//     res.json({ title: 'title', location: 'location', video: 'video', poster: 'poster', video_path_mp4: 'video_path_mp4', video_path_ogv: 'video_path_ogv', video_path_webm: 'video_path_webm', img_alt: 'img_alt', img_path: 'img_path', desc: 'desc'});
// });



app.listen(port, () => {
    console.log('Our app is running on http://localhost:' + port);
});


// if(err) {
//   console.error(err);
// }
// res.render('portfolio', {title: title, cards: result});


//Error Middleware
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
res.locals.error = err;
res.status(err.status);
res.render('error', err);
});
