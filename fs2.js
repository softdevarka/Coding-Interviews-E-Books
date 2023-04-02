var fs = require("fs");

var data = fs.readFileSync("Input.txt");
console.log("Synchronous read:" + data.toString());
