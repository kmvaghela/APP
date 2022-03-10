const router = require("express").Router();
const Stripe = require("stripe");
const stripe = new Stripe("sk_test_51KbjJhIa6qEamPX9eXLAGoiEKsN3W7yTvp99MGui3aeS8o2ENNKh0g4eeMGoQmXzLahStZmKSQiQ1KfFPfLMpOfA00hLunJ0XL");

router.post("/payment", (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        }
    );
})


module.exports = router;