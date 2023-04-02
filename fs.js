var fs = require("fs");

fs.readFile("Input.txt", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("Asysnchronous read:" + data.toString());
});
