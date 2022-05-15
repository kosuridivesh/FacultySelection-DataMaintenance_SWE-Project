const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const authKeys = require("../lib/authKeys");
const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require("uuid");
const User = require("../db/User");
const JobApplicant = require("../db/JobApplicant");
const Recruiter = require("../db/Recruiter");

const router = express.Router();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "aadsteam4@gmail.com",
    pass: "dreamteam@4",
  },
});

router.post("/signup", (req, res) => {
  const data = req.body;
  let user = new User({
    email: data.email,
    password: data.password,
    type: data.type,
  });
  // console.log(user);
  user
    .save()
    .then(() => {
      const userDetails =
        user.type == "recruiter"
          ? new Recruiter({
              userId: user._id,
              name: data.name,
              contactNumber: data.contactNumber,
              bio: data.bio,
              uniname: data.uniname,
            })
          : new JobApplicant({
              userId: user._id,
              name: data.name,
              education: data.education,
              skills: data.skills,
              rating: data.rating,
              resume: data.resume,
              profile: data.profile,
            });

      userDetails
        .save()
        .then(() => {
          // Token
          const token = jwt.sign({ _id: user._id }, authKeys.jwtSecretKey);
          res.json({
            token: token,
            userId: user._id,
            email: data.email,
            type: user.type,
            verified: user.verified,
          });
        })
        .catch((err) => {
          user
            .delete()
            .then(() => {
              res.status(400).json(err);
            })
            .catch((err) => {
              res.json({ error: err });
            });
          err;
        });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/login", (req, res, next) => {
  passport.authenticate(
    "local",
    { session: false },
    function (err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        res.status(401).json(info);
        return;
      }
      // Token
      const token = jwt.sign({ _id: user._id }, authKeys.jwtSecretKey);
      // console.log(user);
      res.json({
        token: token,
        userId: user._id,
        email: user.email,
        type: user.type,
        verified: user.verified,
      });
    }
  )(req, res, next);
});

module.exports = router;
