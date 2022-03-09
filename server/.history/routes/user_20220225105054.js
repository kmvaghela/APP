const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("user test is successful123");
});

module.exports = router