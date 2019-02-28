// If not in production, default to using dotenv to get custom environment variables
if (process.env.NODE_ENV != production) {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));
app.use(express.urlencoded());
// app.use(express.json());
const port = process.env.PORT || 4000;

// Load film
app.post("/film", function(req, res) {
  if (req.body.password == process.env.FILMPASSWORD) {
    res.sendFile(path.join(__dirname + "/film/index.html"));
  } else {
    res.status(404).sendFile(path.join(__dirname + "/film/error.html"));
  }
});
app.get("/film", function(req, res) {
  res.status(404).sendFile(path.join(__dirname + "/film/error.html"));
});
app.listen(port, () => console.log(`Listening on port ${port}`));

// Minify images
const compress_images = require("compress-images");

compress_images(
  "raw-images/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}",
  "public/images/",
  { compress_force: false, statistic: true, autoupdate: true },
  false,
  { jpg: { engine: "mozjpeg", command: ["-quality", "70"] } },
  { png: { engine: "pngquant", command: ["--quality=20-50"] } },
  { svg: { engine: "svgo", command: "--multipass" } },
  { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
  function(error, completed, statistic) {
    console.log("-------------");
    console.log(error);
    console.log(completed);
    console.log(statistic);
    console.log("-------------");
  }
);
