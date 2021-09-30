const express = require('express');
const morgan = require('morgan');
const app = express();
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//static & urlencoded??

app.get('/', function(req, res) { console.log('hello') });

// app.get('/', function(req, res) { console.log('bye') });

const PORT = 8080;
app.listen(PORT, () => {
    console.log(
        `This process is now officially listening for HTTP messages!
    It is listening for those signals on port ${PORT}. :)
    Happy requesting!`
    );
});
