const express = require('express');
const app = express();
app.use(express.json());

 app.post('/api/todos',function(req, res){
     let body = req.body;
    res.json(body);
    console.log(body);
    //create new task {id:id, status:body.status, name:body.name}
    // save task to BD  
});

app.get("/api/todos", function(req, res){
    // Get from BD todos
    let todos = {
        "id":1,
        "status":"done",
        "name":"sumthing" 
    };
    console.log(todos);
    res.json(todos);   
});

app.put('/api/todos/:id', function(req, res){
    let id = req.params.id;
    console.log(id);
    // 
});
const port = 8080;

app.listen(port, function(){   
    console.log(`Server started on port: ${port}`);
});
 