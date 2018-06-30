
const express = require('express');
const app = express();
const config = require("./config/config");
const port = config.port;

app.use(express.json());

require('./routers')(app);

app.listen(port, function(){   
    console.log(`Server started on port: ${port}`);
});
