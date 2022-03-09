const router = require("express").Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const Cart = require("../models/Cart");

//CREATE 
router.post("/", verifyToken, async (req, res) => {
    const newCart = new Product(req.body)
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (error) {
        res.status(500).json(error);
    }
})

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true }
        );
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted !");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET CART OF USER
router.get("/find/:userId", async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        res.status(200).json(cart);

    } catch (err) {
        res.status(500).json(err);
    }
});

// //GET ALL Products
// router.get("/", async (req, res) => {
//     const qNew = req.query.new;
//     const qCategory = req.query.category;

//     try {
//         let products;

//         if (qNew) {
//             products = await Product.find().sort({ createdAt: -1 }).limit(1);

//         } else if (qCategory) {
//             products = await Product.find({
//                 categories: {
//                     $in: [qCategory],
//                 },
//             })

//         } else {
//             products = await Product.find();
//         }

//         res.status(200).json(products);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


module.exports = router;