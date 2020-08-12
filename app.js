const express = require("express");
const app = express();

var multer = require("multer");

var myStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var uploader = multer({ storage: myStorage });

app.post("/uploadfile", uploader.single("myFile"), function (req, res, next) {
  const file = req.file;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }

  res.send(req.file);
});

app.listen(6070, () => {
  console.log("Start Live Server in port 6070");
});

// for run
// node app.js
