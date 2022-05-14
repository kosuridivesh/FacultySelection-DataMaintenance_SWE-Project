const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get("/resume/:file", (req, res) => {
  const address = path.join(__dirname, `../public/resume/${req.params.file}`);
  fs.access(address, fs.F_OK, (err) => {
    if (err) {
      res.status(404).json({
        message: "File not found",
      });
      return;
    }
    res.sendFile(address);
  });
});

router.get("/profile/:file", (req, res) => {
  // const address = path.join(__dirname, `../public/profile/${req.params.file}`);
  // const address = `https://storage.googleapis.com/arvindbucketforse/${
  //   req.params.file.split("/")[3]
  // }`;
  // const address = `https://storage.googleapis.com/arvindbucketforse/9814c396-77a4-4d63-9fc6-92d72ec4c543.png`;
  console.log("req.params.file", req.params.file);
  fs.access(address, fs.F_OK, (err) => {
    if (err) {
      res.status(404).json({
        message: "File not found",
      });
      return;
    }
    res.sendFile(address);
  });
});

module.exports = router;
