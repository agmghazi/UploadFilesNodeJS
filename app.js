const { urlencoded } = require("express");
const express = require("express");
const app = express();

var multer = require("multer");

var uploads = "C:/inetpub/wwwroot/_Files";
var myStorage = multer.diskStorage({
  destination: uploads,
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// var myStorage = multer.diskStorage({
// destination: function (req, file, cb) {
// cb(null, uploads);
// },
// filename: function (req, file, cb) {
// cb(null, file.originalname);
// },
// });

// let fileFilter = function (req, file, cb) {
//   var allowedMimes = ["image/jpeg", "image/pjpeg", "image/png"];
//   if (allowedMimes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(
//       {
//         success: false,
//         message: "Invalid file type. Only jpg, png image files are allowed.",
//       },
//       false
//     );
//   }
// };

var uploader = multer({
  storage: myStorage,
  limits: {
    fileSize: 1000 * 1024 * 1024, //file size limited 27 mb
  },
  // fileFilter: fileFilter,
});

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
