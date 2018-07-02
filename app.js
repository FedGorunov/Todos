
const express = require('express');
const app = express();
const config = require("./config/config");
const port = config.port;

app.use(express.json());

require('./routers')(app);

// app.use(function(err, req, res, next) {
//     console.error(err.stack);
//     res.status(500).json({err:'Something broke!'});
//   });

app.listen(port, function(){   
    console.log(`Server started on port: ${port}`);
});
