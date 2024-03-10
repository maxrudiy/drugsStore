import { v4 } from "uuid";
import OrdersModel from "../models/orders.js";
import ApiError from "../exceptions/api.js";

class OrdersController {
  async createOrder(req, res, next) {
    try {
      const sessionId = req.cookies.sessionId ? req.cookies.sessionId : v4();
      const { products, name, email, phone, address } = req.body;
      const order = await OrdersModel.create({
        sessionId,
        products,
        name,
        email,
        phone,
        address,
      });
      res.cookie("sessionId", sessionId, {
        path: "/",
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: "none",
        secure: true,
        httpOnly: true,
      });
      return res.json(order);
    } catch (err) {
      return next(err);
    }
  }
  async getOrder(req, res, next) {
    try {
      const { sessionId } = req.cookies;
      const { id } = req.params;
      if (!sessionId) {
        return next(ApiError.BadRequest("No orders in this session"));
      }
      const order = await OrdersModel.find({ sessionId, _id: id });
      if (!order) {
        return next(ApiError.BadRequest("No orders in this session"));
      }
      return res.json(order);
    } catch (err) {
      return next(err);
    }
  }
  async getOrders(req, res, next) {
    try {
      const { sessionId } = req.cookies;
      if (!sessionId) {
        return next(ApiError.BadRequest("No orders in this session"));
      }
      const orders = await OrdersModel.find({ sessionId });
      return res.json(orders);
    } catch (err) {
      return next(err);
    }
  }
  async getOrdersByName(req, res, next) {
    try {
      const { name } = req.body;
      const orders = await OrdersModel.find({ name });
      return res.json(orders);
    } catch (err) {
      return next(err);
    }
  }
  async updateOrder(req, res, next) {
    try {
      const { id } = req.params;
      const { sessionId } = req.cookies;
      const { products, name, email, phone, address } = req.body;
      if (!sessionId) {
        return next(ApiError.BadRequest("No orders in this session"));
      }
      const order = await OrdersModel.find({ sessionId, _id: id });
      if (!order.status === "pending") {
        return next(ApiError.BadRequest("Order already processed"));
      }
      const updatedOrder = await OrdersModel.findByIdAndUpdate(
        id,
        { products, name, email, phone, address },
        { new: true }
      );
      res.cookie("sessionId", sessionId, { maxAge: 24 * 60 * 60 * 1000, sameSite: "lax", httpOnly: true });
      return res.json(updatedOrder);
    } catch (err) {
      return next(err);
    }
  }
  async deleteOrder(req, res, next) {
    try {
      const { id } = req.params;
      const { sessionId } = req.cookies;
      if (!sessionId) {
        return next(ApiError.BadRequest("No orders in this session"));
      }
      const order = await OrdersModel.find({ sessionId, _id: id });
      if (!order.status === "pending") {
        return next(ApiError.BadRequest("Order already processed"));
      }
      const deletedOrder = await OrdersModel.findByIdAndDelete(id);
      res.cookie("sessionId", sessionId, { maxAge: 24 * 60 * 60 * 1000, sameSite: "lax", httpOnly: true });
      return res.json(deletedOrder);
    } catch (err) {
      return next(err);
    }
  }
}

export default new OrdersController();
