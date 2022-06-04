const express = require("express");
const router = express.Router();
const { authentication } = require("../middlewares/auth");
const {
  createUser, 
  loginUser, 
  getProfile,  
  updateUser
} = require("../controllers/userController");

const {
  createProduct, 
  getProduct, 
  getProductById , 
  updateProduct, 
  deleteProductById  
} = require('../controllers/productController')

const {
  addToCart , 
  updateCart, 
  getCart, 
  deleteCart
} = require('../controllers/cartController')

const { 
  createOrder, 
  updateOrder
} = require('../controllers/orderController')

// FEATURE I - User APIs


router.post("/register", createUser);
router.post('/login', loginUser)
router.get("/user/:userId/profile", authentication, getProfile);
router.put("/user/:userId/profile", authentication, updateUser);


// FEATURE II - Product APIs

router.post('/products', createProduct )
router.get('/products', getProduct )
router.get('/products/:productId', getProductById )
router.put('/products/:productId', updateProduct )
router.delete('/products/:productId', deleteProductById )

// FEATURE III - Cart APIs

router.post('/users/:userId/cart', authentication, addToCart )
router.put('/users/:userId/cart', authentication, updateCart )
router.get('/users/:userId/cart', authentication, getCart)
router.delete('/users/:userId/cart', authentication, deleteCart)


// FEATURE IV - Order

router.post('/users/:userId/orders', authentication, createOrder)
router.put('/users/:userId/orders', authentication, updateOrder)


router.all("/*", function (req, res) {
  res
    .status(404)
    .send({ status: false, msg: "The api you requested is not available" });
});

module.exports = router;
