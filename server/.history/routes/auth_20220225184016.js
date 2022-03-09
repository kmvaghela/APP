const router = require("express").Router();

//REGISTER
router.post("/register", (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })
})

module.exports = router;