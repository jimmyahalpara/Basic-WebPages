console.log("This is module");

function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
}

module.exports = {
    average: average,
    name: "jimmy",
    repo: "github"
}