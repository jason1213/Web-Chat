var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webchat');
exports.User = mongoose.model('User', require('./user'));
exports.Message = mongoose.model('Message', require('./message'));
exports.Room = mongoose.model('Room', require('./room'));