import ProductsModel from "../models/products.js";

const PAGINATION_LIMIT = Number(process.env.PAGINATION_LIMIT);

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
      const { page = 1 } = req.query;
      const startIndex = (Number(page) - 1) * PAGINATION_LIMIT;
      const total = await ProductsModel.countDocuments({ shop });

      const products = await ProductsModel.find({ shop }).sort({ _id: -1 }).limit(PAGINATION_LIMIT).skip(startIndex);
      return res.json({
        data: products,
        currentPage: Number(page),
        numberOfPages: Math.ceil(total / PAGINATION_LIMIT),
      });
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
  async filtersProducts(req, res, next) {
    try {
      const { shop } = req.params;
      const { page = 1, sorting, price = "0-1000000000", search } = req.query;
      const minPrice = Number(price.split("-")[0]);
      const maxPrice = Number(price.split("-")[1]);

      let sortingQuery;
      switch (sorting) {
        case "cheap":
          sortingQuery = { price: 1 };
          break;
        case "expensive":
          sortingQuery = { price: -1 };
          break;
        case "novelty":
          sortingQuery = { _id: -1 };
          break;
        default:
          sortingQuery = { _id: -1 };
      }

      let dbQuery = [{ shop }, { price: { $gte: minPrice } }, { price: { $lte: maxPrice } }];
      search && dbQuery.push({ name: search });

      const startIndex = (Number(page) - 1) * PAGINATION_LIMIT;
      const total = await ProductsModel.countDocuments({ $and: dbQuery });

      const products = await ProductsModel.find({ $and: dbQuery })
        .sort(sortingQuery)
        .limit(PAGINATION_LIMIT)
        .skip(startIndex);

      res.json({
        data: products,
        currentPage: Number(page),
        numberOfPages: Math.ceil(total / PAGINATION_LIMIT),
      });
    } catch (err) {
      return next(err);
    }
  }
}

export default new ProductsController();
