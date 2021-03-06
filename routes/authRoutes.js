const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const validateRegisterInput = require("../validation/register");
const keys = require("../config/keys");
var jwt_decode = require("jwt-decode");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/events");
    }
  );

  app.get("/api/logout", (req, res) => {
    console.log(req.user);
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    console.log("sdfasdfsdf");

    console.log(req.body);
    // if (req.user) {
    //   res.send(req.user);
    // } else {
    //   // var jwtDecoded = jwt_decode(token);
    //   // console.log(decoded);
    //   res.send("not loggedin yo");
    // }
    res.send("ok");
  });
  app.get("/api/current_user/:id", (req, res) => {
    console.log(req.params.id);
    var decoded = jwt_decode(req.params.id);
    console.log(decoded);
    if (req.user) {
      res.send(req.user);
    } else {
      let userId = decoded.id;
      console.log("Here is the user's id: ", userId);
      User.findById({ _id: userId }).then(user => {
        user = user.name;
        console.log("This is the user's name:", user);
        if (!user) {
          return res.status(404).json({ email: "User not found" });
        } else if (user) {
          return res.json({
            user
          });
        }
      });
    }
  });

  app.post("/api/verify", (req, res) => {
    jwt.verify(req.body.verify, keys.secretOrKey, (err, decoded) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(decoded);
      }
    });
  });
  app.post("/api/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
          if (isMatch) {
            const payload = {
              id: user.id,
              name: user.name,
              avatar: user.avatar
            };

            jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: true,
                  token: token
                });
              }
            );
          } else {
            return res.status(400).json({ password: "Password incorrect" });
          }
        });
        // return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });

  app.post("api/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {
      if (!user) {
        return res.status(404).json({ email: "User not found" });
      }

      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          const payload = { id: user.id, name: user.name, avatar: user.avatar };

          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 3600 },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token,
                user: user.id
              });
            }
          );
        } else {
          return res.status(400).json({ password: "Password incorrect" });
        }
      });
    });
  });

  app.get(
    "api/current",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
      });
    }
  );
};
