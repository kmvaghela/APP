const router = require("express").Router();
const Stripe = require("stripe");
const stripe = new Stripe("sk_test_51KY7OGSHRGuAPJFx2Wb4WCiRLebZ6OeezBeacpFmA7DbqNoIIVgHpeYYXYwIwmLtaoDp00lH5dmi7XBPf7FWXsus000re2cduu");

router.post("/payment", (req, res) => {
    stripe.paymentIntents.create({
        amount: 2000,
        currency: "usd",
        payment_method_types:['card'],
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