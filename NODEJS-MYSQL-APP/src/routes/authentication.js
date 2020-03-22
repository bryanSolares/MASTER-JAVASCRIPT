const express = require("express");
const router = express.Router();

const passport = require("passport");

router.get("/singup", (req, res) => {
    res.render("auth/singup")
});
/*
router.post("/singup", (req, res) => {
    passport.autheticate("local.singup", {
        successRedirect: "/profile",
        failureRedirect: "/signup",
        failureFlash: true
    });
    res.send("Recibido");
});
*/

//Esto viaje a passport
router.post("/singup", passport.authenticate("local.singup", {
    successRedirect: "/profile",
    failureRedirect: "/signup",
    failureFlash: true
}));

router.get("/singin", (req, res) => {
    res.render("auth/singin")
});

router.post("/singin", (req, res, next) => {
    passport.authenticate("local.singin", {
        successRedirect: "/profile",
        failureRedirect: "/singin",
        failureFlash: true
    })(req, res, next);
});



router.get("/profile", (req, res) => {
    res.send("this is your profile");
})

module.exports = router;