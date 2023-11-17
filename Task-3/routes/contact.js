const path = require('path');
const express = require('express');
const productController = require('../controllers/product');
const router = express.Router();


router.get('/admin/contact',productController.contactdetails );

router.post('/admin/contact', productController.postContact);


exports.routes = router;