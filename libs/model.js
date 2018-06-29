var mongoose = require('mongoose');


mongoose.Promise = global.Promise;

Schema = mongoose.Schema;
const schema = new Schema({
        name: String,      
        status:String
        });
   
const Todo = mongoose.model('Todo', schema);

module.exports= Todo;