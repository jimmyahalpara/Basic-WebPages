var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/JimmyKart", { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, "Connection error: "));
db.once("open", function() {
    // we're connected
    console.log("We are connected bro/sis...");
})

var kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function() {
    var greeting = this.name
    console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);

var harryKitty = new Kitten({
    name: 'harryKitty'
})

console.log(harryKitty.name);
harryKitty.speak();

harryKitty.save(function(err, harrykitty) {
    // if (err) return console.error(err);
    harryKitty.speak();
});

Kitten.find({ name: "harryKitty" }, function(err, kitttens) {
    if (err) return console.error(err);
    console.log(kitttens);

})