const express = require('express');
const app = express();
const cors = require('cors');
var buldLoad = require("./src/bulk_load");


app.use(cors());


// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, async () => {
    console.log('Server listening on port ' + port);
    await buldLoad.createBulkLoad();
    //await buldLoad.uploadBulkLoad();
});