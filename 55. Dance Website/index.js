const express = require("express");
const path = require("path");
// const fs = require("fs");
const app = express();
const port = 8000;

// express specific stuff
app.use("/static",express.static("static"));
app.use(express.urlencoded());


// PUG specific stuff
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));



// Endpoints 
app.get('/', (req, res)=> {
    const parms = {};
    res.status(200).render("home.pug", parms);
})

app.get('/contact', (req, res)=> {
    const parms = {};
    res.status(200).render("contact.pug", parms);
})



app.listen(port, ()=>{
    console.log(`The application started sucessfully on port ${port}`);
})
