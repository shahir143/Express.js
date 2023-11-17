const products = [];

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
    products.push({ title: req.body.title });
    console.log(req.body);
    res.redirect('/');
  }

exports.getProducts= (req, res, next) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
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
exports.postContact=(req, res, next) => {
    console.log(req.body);
    return res.send(`<h1>Form successfully filled</h1>
      <li><a href="/"><button>HOME</button></a></li>`);
  }