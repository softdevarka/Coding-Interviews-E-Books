const express = require("express");
const multer = require("multer");
const app = express();
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
    filename: fuction(red, file);
  },
});
