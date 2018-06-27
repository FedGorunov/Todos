const mongoose = require('./libs/mongoose');
Schema = mongoose.Schema;
const schema = new Schema({
        name: String,      
        status:String
        });
   

const Todo = mongoose.model('Todo', schema);

let todo = new Todo({ name: 'Aaaaaa1', status: 'done' });

todo.save().then(() => console.log('save'));

 todo = new Todo({ name: 'Bbbbbbbb2', status: 'new' });

todo.save().then(() => console.log('save'));
Todo.find().then(()=> console.log(todos));
