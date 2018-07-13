
const express = require('express');
const app = express();
const config = require("./config/config");
const port = config.port;
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/public"));

require('./routers')(app);

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({err:'Something broke!'});
  });

app.listen(port, function(){   
    console.log(`Server started on port: ${port}`);
});
