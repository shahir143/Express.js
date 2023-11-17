const Product =require('../models/product')
const Contract =require('../models/contact')

exports.getAddProduct=(req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }
exports.postProduct=(req, res, next) => {
  const product = new Product(req.body.title)
  product.save();
    res.redirect('/');
  }

exports.getProducts= (req, res, next) => {
  Product.fetchAll((products)=>{
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });  
  }
exports.contactdetails=(req, res, next) => {
    res.render('contact', {
      pageTitle: 'Contact',
      path: '/admin/contact',
      formsCSS: true,
      productCSS: true,
    });
  }
  exports.postContact = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const contract = new Contract(name, email);
    contract.save();
  
    return res.send(`<h1>Form successfully filled</h1>
      <li><a href="/"><button>HOME</button></a></li>`);
  }
  