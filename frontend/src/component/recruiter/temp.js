const nodemailer = require("nodemailer");

const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const authKeys = require("../lib/authKeys");

const User = require("../db/User");
const JobApplicant = require("../db/JobApplicant");
const Recruiter = require("../db/Recruiter");
// const UserOTPVerification = require("../db/UserOTPVerification")

const router = express.Router();
// const bcrypt = require("bcrypt");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "facultyportal05@gmail.com",
    pass: "faculty05",
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
      sendOTPVerficationEmail(data.email);
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
            type: user.type,
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
      res.json({
        token: token,
        type: user.type,
      });
    }
  )(req, res, next);
});

const sendOTPVerficationEmail = async (email) => {
  try {
    // const otp = (Math.floor(1000 + Math.random()*9000));
    const mailOptions = {
      from: "facultyportal05@gmail.com",
      to: email,
      subject: "Account Created",
      html: `<p>hi</p>`,
    };
    transporter.sendMail(mailOptions);
  } catch (error) {
    res.json({
      status: "Failed",
      message: error.message,
    });
  }
};

module.exports = router;
