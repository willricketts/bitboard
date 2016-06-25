var config = require('./config');
var Maki = require('maki');
var bitboard = new Maki(config);

var Job = bitboard.define('job', {
  icon: 'suitcase',
  description: 'This is a job posting on the Bitboard.',
  attributes: {
    title: { type: String , max: 140 , required: true },
    content: { type: String, max: 5000, min: 100, required: true },
    paid: { type: Boolean, required: true, default: false }
  }
});

var Category = bitboard.define('category', {
  description: 'This is a type of job posting',
  attributes: {
    title: { type: String, max: 64, required: true }
  }
});

var User = bitboard.define('user', {
  description: 'This is a user which can create Jobs',
  attributes: {
    email: { type: String, max: 128, required: true, unique: true }
  }
});

bitboard.start();
