
const config = require("../config/config");
const Todo = require('../libs/model');

module.exports= function(app){
    
app.post(config.uri,function(req, res){
    //create new task 
     let newTask = new Todo({name:req.body.name,
                            status:req.body.status});
    // save task to BD
    Todo.create(newTask, function(err, todos){
       // mongoose.disconnect();
         if(err) return console.log(err);
        res.json(newTask);   
     });
    
    console.log("Save new task in BD"+newTask); 
});
    
app.get(config.uri, function(req, res){
    // Get from BD todos 
    Todo.find({}, function(err, todos){
       // mongoose.disconnect();
         if(err) return console.log(err);
        res.json(todos);   
     });
    console.log("hi from get");  
});

app.put(config.uri+'/:id', function(req, res){
    let id = req.params.id;
Todo.findByIdAndUpdate(id, {name: req.body.name, status: req.body.status}, function(err, todo){  
    //mongoose.disconnect();
    if(err) return console.log(err);
    res.send( todo);
});  
    console.log(id);
});
};