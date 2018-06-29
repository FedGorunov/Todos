var mongoose = require('mongoose');
const Todo = require('./libs/model');

mongoose.connect('mongodb://localhost/tododb');

 //let todo = new Todo({ name: 'Aaaaaa2', status: 'done' });
// todo.save().then(() => console.log('save'+ todo));



const showAllTodo =Todo.find({}, function(err, todos)
{       mongoose.disconnect();
	if(err) return console.log(err);
       console.log(todos);
       
});

module.exports =showAllTodo;

