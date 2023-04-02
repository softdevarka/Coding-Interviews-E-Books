var express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/" + "chat.html");
});
users = [];
io.on("connection", function (socket) {
  console.log("A User connected");
  socket.on("createUser", function (data) {
    console.log(data);
    if (users.indexOf(data) >= 0) {
      soocket.emit("userExists, data" + "user already exists");
    } else {
      socket.emit("setUser", { username: data });
    }
  });
  socket.on("msg", function (data) {
    //send messages to everyone
    io.emit("newmsg", function () {
      console.log("listening on localhost:2000");
    });
  });
});
