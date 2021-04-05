const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// for serving static files 
app.use("/static", express.static('static'));

// set the teplete engine as pug
app.set('view engine', 'pug');

// set the views directory 
app.set('views', path.join(__dirname, 'views'))

// out pug endpoint
app.get("/demo", (req, res) => {
    res.status(200).render('demo', { title: "Hey", message: "HEllo THeere" })
})


app.get("/", (req, res) => {
    res.status(200).send("This is home page of our first express app");
})
app.get("/about", (req, res) => {
    res.send("This is about page of our first express app");
})
app.post("/about", (req, res) => {
    res.send("This is post request for about page of our first express app");
})
app.get("/this", (req, res) => {
    res.status(404).send("This page not found");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})