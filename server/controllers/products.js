import ProductsModel from "../models/products.js";

class ProductsController {
  async createProduct(req, res, next) {
    try {
      const { shop } = req.params;
      const { name, description, price, image, categories } = req.body;
      const product = await ProductsModel.create({
        name,
        description,
        price,
        image,
        categories,
        shop,
      });
      return res.json(product);
    } catch (err) {
      return next(err);
    }
  }
  async getProduct(req, res, next) {
    try {
      const { id } = req.params;
      const product = await ProductsModel.findById(id);
      return res.json(product);
    } catch (err) {
      return next(err);
    }
  }
  async getProducts(req, res, next) {
    try {
      const { shop } = req.params;
      const page = req.query.page || 1;
      const limit = 5;
      const startIndex = (Number(page) - 1) * limit;
      const total = await ProductsModel.countDocuments({ shop });

      const products = await ProductsModel.find({ shop }).sort({ _id: -1 }).limit(limit).skip(startIndex);
      return res.json({ data: products, currentPage: Number(page), numberOfPages: Math.ceil(total / limit) });
    } catch (err) {
      return next(err);
    }
  }
  async updateProduct(req, res, next) {
    try {
      const { id } = req.params;
      const { name, description, price, image, categories } = req.body;
      const updatedProduct = await ProductsModel.findByIdAndUpdate(
        id,
        { name, description, price, image, categories },
        { new: true }
      );
      return res.json(updatedProduct);
    } catch (err) {
      return next(err);
    }
  }
  async deleteProduct(req, res, next) {
    try {
      const { id } = req.params;
      const deletedProduct = await ProductsModel.findByIdAndDelete(id);
      return res.json(deletedProduct);
    } catch (err) {
      return next(err);
    }
  }
  async filterProducts(req, res, next) {
    try {
      const { name, price } = req.query;
      const minPrice = req.query["min-price"];
      const maxPrice = req.query["max-price"];

      const query = { price: Number(price) || { $lte: Number(maxPrice) || 1000000000, $gte: Number(minPrice) || 0 } };
      name && Object.assign(query, { name });
      const products = await ProductsModel.find(query).exec();

      res.json(products);
    } catch (err) {
      return next(err);
    }
  }
}

export default new ProductsController();
