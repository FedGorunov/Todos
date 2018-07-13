const config = require("../config/config");
const Todo = require("../libs/model");

module.exports = function(app) {
  app.post(config.uri, function(req, res) {
    if (!req.body) return res.sendStatus(400);
    //create new task
    let newTask = new Todo({
      name: req.body.name,
      status: req.body.status
    });
    // save task to BD
    Todo.create(newTask, function(err, todo) {
      if (err) {
        res.status(500).send({ error: "Something failed!" });
        return;
      }
      res.send(todo);
      console.log("Save new task in BD: " + todo);
    });
  });

  app.get(config.uri, function(req, res) {
    // Get from BD todos
    Todo.find({}, function(err, todos) {
      if (err) return res.status(500).send({ error: "Something failed!" });
      res.json(todos);
      console.log("hi from get");
    });
  });

  app.get(config.uri + "/:id", function(req, res){
    let id = req.params.id;
    Todo.findById(id, function(err, todo) {
        if (err) return res.status(500).send({ error: "Something failed!" });
        res.json(todo);
        console.log("hi from get one");
      });
    
});

  app.put(config.uri + "/:id", function(req, res) {
    if (!req.body) return res.sendStatus(400);
    let id = req.params.id;
    let newValues = {
      name: req.body.name,
      status: req.body.status
    };
    Todo.findByIdAndUpdate(id,newValues , { new: true, runValidators: true }, function(err, todo) {
      if (err) return res.status(500).send({ error: "Something failed!" });
      res.send(todo);
      console.log(id + "  replaced");
    });
  });

 
app.delete(config.uri + "/:id", function(req, res) { 
  let id = req.params.id; 
  Todo.findByIdAndRemove(id, function(err, todo){
    if (err) return res.status(500).send({ error: "Something failed!" });
      res.send(todo);
      console.log(todo + " delete!")
  });
});
};