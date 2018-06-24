const express = require('express');
const app = express();
app.get("/", function(req, res){
    console.log("Hello!");
    res.send("Привет!!");
    
});
const port = 8080;

app.listen(port, function(){
    
    console.log(`Server started on port: ${port}`);
} );
 