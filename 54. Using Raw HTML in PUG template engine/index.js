const express = require("express");
const path = require("path");
const app = express();
const port = 80;


// express specific stuff 
app.use("/static", express.static("static")) // for serving static files
app.use(express.urlencoded()) // 

// pug specific stuff 
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// endpoints
app.get('/', (req, res) => {
    res.status(200).render("index.pug");
});


app.post('/', (req, res) => {
    data = req.body;
    console.log(data);
    message = "Name: " + data['name'] + "\nAge: " + data['age'] + '\nGender: ' + data['gender'] + '\nAddress: ' + data['address'] + "\nMore: " + data['more'];
    parms = {'message':message}
    

    console.log("This is post request");
    res.status(200).render("index.pug",);
});








app.listen(port, () => {
    console.log("This application is listening on port 80");
})