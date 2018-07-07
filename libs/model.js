var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tododb-v1');

mongoose.Promise = global.Promise;

Schema = mongoose.Schema;
const schema = new Schema({
        name: {type:String, unique:false},      
        status:{
            type: String,
            enum: ['new', 'started', 'done']
         }
        });
   
const Todo = mongoose.model('Todo', schema);

module.exports= Todo;