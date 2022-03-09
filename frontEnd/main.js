const { application } = require("express");
const express = require("express");
const main = express();
const port = 4000;

//middlewares
main.use( express.static("public") )


main.listen(port, err => {
    if (err) {
        return console.log(`Error ${err}`);
    } else {
        console.log(`Listening at port ${port}`);
    }
})