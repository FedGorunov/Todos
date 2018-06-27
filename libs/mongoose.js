var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tododb');

module.exports= mongoose;