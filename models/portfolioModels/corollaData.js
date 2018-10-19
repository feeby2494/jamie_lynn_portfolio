const MongoClient = require('mongodb').MongoClient; // need this!

// setup database with MongoClient
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.error(err);
  }
  const db = client.db('totorolla');
  const corollaCards = {
    "port_title": "Corolla in the Daylight...",
    "img_path": "",
    "img_alt": "",
    "img_path01": "",
    "img_alt01": "",
    "img_path02": "",
    "img_alt02": "",
    "img_path03": "",
    "img_alt03": "",
    "img_path04": "",
    "img_alt04": "",
    "img_path05": "",
    "img_alt05": "",
    "img_path06": "",
    "img_alt06": "",
    "img_path07": "",
    "img_alt07": "",
    "short_desc": "After looking on OfferUp for some cheap Civic HX wheels, I came across a pair of these!",
    "desc": "These wheels are crazy light weight and made by Enkei for Honda. I beleive they weigh only 11 lbs! And I found numerous people online who have sanded and polised the paint off the lip, which is the look I'm going for!",
    "modal_title_label": "plansTotorollaLabel",
    "modal_id": "plansTotorolla",
    "modal_title": "Detailed Plans for Totorolla",
    "modal_desc": ""
  };


  db.collection('corolla').save(corollaCards);

});
