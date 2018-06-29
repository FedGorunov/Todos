var mongoose = require('mongoose');
const Todo = require('./libs/model');


module.exports ={show:function(){

   
    mongoose.connect('mongodb://localhost/tododb');

    Todo.find({}, function(err, todos){
       mongoose.disconnect();
    	if(err) return console.log(err);
       console.log(todos[0]); 
            
});
    
}};


