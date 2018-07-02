var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tododb');

mongoose.Promise = global.Promise;

Schema = mongoose.Schema;
const schema = new Schema({
        name:{
           type: String
         },      
        status:{
            type: String,
            enum: ['new', 'started', 'done']
         }
        });
   
const Todo = mongoose.model('Todo', schema);

module.exports= Todo;