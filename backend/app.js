const express = require("express");
const cors = require("cors");
const port = 3000;
const app = express();

//middlewares
app.use( cors() );
app.use( express.json() );


//route
app.get("/aula", (req,res) => {
    let randomNumber = Math.random()*((99 - 1) + 1);
    
    let delay = (Math.random()*((5-1)+1))*1000;

    randomNumber = JSON.stringify(randomNumber);
    let answer = {randomNumber,delay};
    answer = JSON.stringify(answer);
    if (delay > 3000) {
        /* answer = new Error("Error de Timeout"); */
        answer = "Error de Timeout"
        console.log(answer);
        res.status(400).send(answer); 
    } else {
        setTimeout( () => res.send(answer), delay );
    }
    
    
})

app.listen(port, err => {
    if (err) {
        return console.log(`Error ${err}`);
    } else {
        console.log(`Listening at port ${port}`);
    }
})