const router = require("express").Router();
const stripe = require("stripe")("sk_test_51KY7OGSHRGuAPJFx2Wb4WCiRLebZ6OeezBeacpFmA7DbqNoIIVgHpeYYXYwIwmLtaoDp00lH5dmi7XBPf7FWXsus000re2cduu");

router.post("/payment", (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
    }, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).json(stripeErr);
        }
        else {
            res.status(200).json(stripeRes);
        }
    });
})

module.exports = router;