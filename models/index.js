var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://heroku_9bqjprf3:107r69eiemhe9ql324spgv8jid@ds031978.mlab.com:31978/heroku_9bqjprf3');

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");