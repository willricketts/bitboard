var config = require('./config');
var Maki = require('maki');
var bitboard = new Maki(config);

var Job = bitboard.define('job', {
  icon: 'suitcase',
  description: 'This is a job posting on the Bitboard.',
  attributes: {
    title: { type: String , max: 140 , required: true }
  }
});

bitboard.start();
