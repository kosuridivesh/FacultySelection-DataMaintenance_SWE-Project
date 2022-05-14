const express = require("express");
const multer = require("multer");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { promisify } = require("util");
var { Storage } = require("@google-cloud/storage");
const gcsMiddlewares = require("./middlewares.js");

const pipeline = promisify(require("stream").pipeline);

const router = express.Router();

// const upload = multer();

const upload = multer();

const storage = new Storage({
  keyFilename: "fleet-codex-340706-54a4f727af1c.json",
});

const bucketName = "arvindbucketforse";

const bucket = storage.bucket(bucketName);

router.post(
  "/resume",
  upload.single("file"),
  async function (req, res, fields) {
    try {
      console.log("req.file.path", req.file.path);
      const destFileName = `${req.file.path}`;
      const filename = `${uuidv4()}.pdf`;
      await bucket
        .upload(destFileName, {
          destination: filename,
        })
        .then(() => {
          res.send({
            message: "Resume uploaded successfully",
            url: `/host/profile/${filename}`,
          });
        })
        .catch((err) => {
          res.status(400).json({
            message: "Error while uploading",
          });
        });
      console.log(
        `${req.file.originalName} copied to gs://${bucketName}/${filename}`
      );
    } catch (err) {
      console.error(err);
    }
  }
);

// router.post("/resume", upload.single("file"), async (req, res) => {
//   const { file } = req;
//   if (file.detectedFileExtension != ".pdf") {
//     res.status(400).json({
//       message: "Invalid format",
//     });
//   } else {
//     const filename = `${uuidv4()}${file.detectedFileExtension}`;
//     // const filename = `temp${file.detectedFileExtension}`;

//     // try {
//     //   const destFileName = `${__dirname}/../public/resume/${filename}`;
//     //   await bucket.upload(destFileName, {
//     //     destination: temp + ".txt",
//     //   });
//     //   console.log(
//     //     `${destFileName} copied to gs://${bucketName}/${destFileName}`
//     //   );
//     // } catch (err) {
//     //   console.error(err);
//     // }

//     pipeline(
//       file.stream,
//       fs.createWriteStream(`${__dirname}/../public/resume/${filename}`)
//     )
//       .then(() => {
//         res.send({
//           message: "File uploaded successfully",
//           url: `/host/resume/${filename}`,
//         });
//       })
//       .catch((err) => {
//         res.status(400).json({
//           message: "Error while uploading",
//         });
//       });
//   }
// });

router.post(
  "/profile",
  upload.single("file"),
  async function (req, res, fields) {
    try {
      console.log("req.file.path", req.file.path);
      const destFileName = `${req.file.path}`;
      const filename = `${uuidv4()}.png`;
      await bucket
        .upload(destFileName, {
          destination: filename,
        })
        .then(() => {
          res.send({
            message: "Photo uploaded successfully",
            url: `/host/profile/${filename}`,
          });
        })
        .catch((err) => {
          res.status(400).json({
            message: "Error while uploading",
          });
        });
      console.log(
        `${req.file.originalName} copied to gs://${bucketName}/${filename}`
      );
    } catch (err) {
      console.error(err);
    }
  }
);

// router.post("/profile", upload.single("file"), (req, res) => {
//   const { file } = req;
//   if (
//     // file.detectedFileExtension != ".jpg" &&
//     file.detectedFileExtension != ".png"
//   ) {
//     res.status(400).json({
//       message: "Invalid format (image should be in .png format)",
//     });
//   } else {
//     const filename = `${uuidv4()}${file.detectedFileExtension}`;

//     pipeline(
//       file.stream,
//       fs.createWriteStream(`${__dirname}/../public/profile/${filename}`)
//     )
//       .then(() => {
//         res.send({
//           message: "Profile image uploaded successfully",
//           url: `/host/profile/${filename}`,
//         });
//       })
//       .catch((err) => {
//         res.status(400).json({
//           message: "Error while uploading",
//         });
//       });
//   }
// });

module.exports = router;
