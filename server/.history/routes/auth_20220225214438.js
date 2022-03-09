const router = require("express").Router();

//REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
        console.log(savedUser);
    } catch (error) {
        res.status(500).json(error);
        // console.log(error);
    }
});

module.exports = router;