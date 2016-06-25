var config = require('./config');
var Maki = require('maki');
var bitboard = new Maki(config);

// Resource Inclusions
var userResource = require('./resources/User');
var categoryResource = require('./resources/Category');
var jobResource = require('./resources/Job');

// Resource Definitions
var User = bitboard.define('user', userResource);
var Category = bitboard.define('category', categoryResource);
var Job = bitboard.define('job', jobResource);

bitboard.start();
