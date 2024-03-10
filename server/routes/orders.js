import express from "express";
import OrdersController from "../controllers/orders.js";

const router = new express.Router();

router.post("/", OrdersController.createOrder);
router.get("/:id(d+)", OrdersController.getOrder);
router.get("/", OrdersController.getOrders);
router.post("/by-name", OrdersController.getOrdersByName);
router.patch("/:id", OrdersController.updateOrder);
router.delete("/:id", OrdersController.deleteOrder);

export default router;
