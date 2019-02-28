const express = require("express");
const app = express();
app.use(express.static("public"));
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));

// Minify images
const compress_images = require("compress-images");

compress_images(
  "raw-images/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}",
  "public/images/",
  { compress_force: false, statistic: true, autoupdate: true },
  false,
  { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
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
