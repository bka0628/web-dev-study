function getProducts(req, res) {
  res.render('admin/products/all-products');
}

function getNewProduct(req, res) {
  res.render('admin/products/new-product');
}

function creatNewProduct() {}

module.exports = {
  getProducts: getProducts,
  getNewProduct: getNewProduct,
  creatNewProduct: creatNewProduct,
};
