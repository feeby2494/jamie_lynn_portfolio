// Schema for Corolla related page and material
const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  short_desc: {
    type: String,
    required: true,
    trim: true
  },
  long_desc: {
    type: String,
    required: true,
    trim: true
  }
  main_image: {
    type: String,
    trim: true
  },
  main_image_alt: {
    type: String,
    trim: true
  },
  hasIframe: {
    type: Boolean,
    required: true,
    trim: true
  },
  iframe_src: {
    type: String,
    trim: true
  },
  hasVideo: {
    type: Boolean,
    required: true,
    trim: true
  },
  video_path_mp4: {
    type: String,
    trim: true
  },
  video_path_ogv: {
    type: String,
    trim: true
  },
  video_path_webm: {
    type: String,
    trim: true
  },
  img_path01: {
    type: String,
    trim: true
  },
  img_path_alt01: {
    type: String,
    trim: true
  },
  img_path02: {
    type: String,
    trim: true
  },
  img_path_alt02: {
    type: String,
    trim: true
  },
  img_path03: {
    type: String,
    trim: true
  },
  img_path_alt03: {
    type: String,
    trim: true
  },
  img_path04: {
    type: String,
    trim: true
  },
  img_path_alt04: {
    type: String,
    trim: true
  },
  img_path05: {
    type: String,
    trim: true
  },
  img_path_alt05: {
    type: String,
    trim: true
  },
  img_path06: {
    type: String,
    trim: true
  },
  img_path_alt06: {
    type: String,
    trim: true
  },
  img_path07: {
    type: String,
    trim: true
  },
  img_path_alt07: {
    type: String,
    trim: true
  },
  modal_title_label: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  modal_id: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  modal_title: {
    type: String,
    trim: true
  },
  modal_desc: {
    type: String,
    trim: true
  }
});

const CorollaCard = mongoose.model('CorollaCard', CardSchema);
const CivicCard = mongoose.model('CivicCard', CardSchema);
const HackCard = mongoose.model('HackCard', CardSchema);
const WebDevCard = mongoose.model('WebDevCard', CardSchema);

module.exports = {
  CorollaCard,
  CivicCard,
  HackCard,
  WebDevCard
};
