import express from "express";
import ProductsController from "../controllers/products.js";

const router = new express.Router();

router.post("/:shop", ProductsController.createProduct);
router.get("/:shop/filters", ProductsController.filtersProducts);
router.get("/:shop/:id(d+)", ProductsController.getProduct);
router.get("/:shop", ProductsController.getProducts);
router.patch("/:shop/:id", ProductsController.updateProduct);
router.delete("/:shop/:id", ProductsController.deleteProduct);

export default router;
