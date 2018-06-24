const express = require('express');
const app = express();

const createTask = app.post('/todos',function(req, res){
    let task =req.body.task;
    // save task to BD  
});

app.get("/", function(req, res){
    console.log("Hello!");
    res.send("Привет!!");   
});
const port = 8080;

app.listen(port, function(){   
    console.log(`Server started on port: ${port}`);
});
 