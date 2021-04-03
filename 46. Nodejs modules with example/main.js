const fs = require("fs");
let text = fs.readFileSync("46. Nodejs modules with example/trial.txt", "utf-8");
console.log(text);
text = text.replace("This is", "This is not");
console.log(text);
fs.writeFileSync("46. Nodejs modules with example/newfile.txt", text);
console.log("created new file....");