const fs = require("fs");


fs.readFile("47. blocking and non blocking code/trial.txt", "utf-8", (err, data) => {
        console.log(data);
    })
    // console.log(data);
console.log("This is a mesage");