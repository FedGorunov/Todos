
const config = require("../config/config");
const Todo = require('../libs/model');

module.exports= function(app){

app.post(config.uri, function(req, res){
    if(!req.body) return res.sendStatus(400);
    //create new task 
    let newTask = new Todo({name:req.body.name,
                            status:req.body.status});
    // save task to BD
  Todo.create(newTask, function(err, todo){
         if(err) return 
             res.status(500).send({ error: 'Something failed!' });
        res.send(todo); 
        console.log("Save new task in BD: "+todo);   
     }); 
});
    
app.get(config.uri, function(req, res){
    // Get from BD todos 
    Todo.find({}, function(err, todos){
         if(err) return res.status(500).send({ error: 'Something failed!' });
        res.json(todos);  
        console.log("hi from get"); 
     });
      
});

app.put(config.uri+'/:id', function(req, res){
    if(!req.body) return res.sendStatus(400);
    let id = req.params.id;
    let newTask = new Todo({name:req.body.name,
        status:req.body.status});
 
    Todo.findByIdAndUpdate(id, {name:req.body.name, status:req.body.status},
        {new: true}, function(err, todo){   
    if(err) return res.status(500).send({ error: 'Something failed!' });
    res.send( todo);
    console.log(id+ "  replaced");
});  
    
});
};