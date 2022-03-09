const router = require("express").Router();
const Stripe = require("stripe");
const stripe = new Stripe("sk_test_51KY7OGSHRGuAPJFx2Wb4WCiRLebZ6OeezBeacpFmA7DbqNoIIVgHpeYYXYwIwmLtaoDp00lH5dmi7XBPf7FWXsus000re2cduu");

// router.post("/payment", (req, res) => {
//     stripe.customers.create({
//         source: req.body.tokenId,
//         amount: req.body.amount,
//         currency: "usd",
//     }, (stripeErr, stripeRes) => {
//         if (stripeErr) {
//             res.status(500).json(stripeErr);
//         }
//         else {
//             res.status(200).json(stripeRes);
//         }
//     });
// })

router.post("/payment", (req, res) => {
    stripe.customers.create({
        source: req.body.tokenId,
    })
        .then(customer => {
            stripe.charges.create({
                amount: req.body.amount,
                currency: "usd",
                customer: customer.id
            })

        }).then(result => res.status(200).json(result)).catch(err => res.status(500).json(err))
})

module.exports = router;