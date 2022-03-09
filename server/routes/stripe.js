const router = require("express").Router();
const Stripe = require("stripe");
const stripe = new Stripe("sk_test_51KY7OGSHRGuAPJFx2Wb4WCiRLebZ6OeezBeacpFmA7DbqNoIIVgHpeYYXYwIwmLtaoDp00lH5dmi7XBPf7FWXsus000re2cduu");

router.post("/payment", async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: "usd",
            payment_method_types:['card'],
        });
        const clientSecret = paymentIntent.client_secret;
        res.json({clientSecret,message:'Payment Initiated Successfully'})
    } catch (error) {
        res.status(500).jason({message:'Payment Initialization Failed'})
    }
})


module.exports = router;