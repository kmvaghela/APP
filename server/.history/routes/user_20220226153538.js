const router = require("express").Router();
const verifyToken = require("../routes/verifyToken");
router.put("/:id",verifyToken)

module.exports = router;