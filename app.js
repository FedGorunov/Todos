const express = require('express');
const app = express();
const config = require("./config");

app.use(express.json());

 app.post(config.uri,function(req, res){
     let body = req.body;
    res.json(body);
    console.log(body);
    //create new task {id:id, status:body.status, name:body.name}
    // save task to BD  
});

app.get(config.uri, function(req, res){
    // Get from BD todos
    let todos = {
        "id":1,
        "status":"done",
        "name":"sumthing" 
    };
    console.log(todos);
    res.json(todos);   
});

app.put(config.uri+'/:id', function(req, res){
    let id = req.params.id;
    res.send(id);
    console.log(id);
    // 
});
const port = config.port;

app.listen(port, function(){   
    console.log(`Server started on port: ${port}`);
});
 