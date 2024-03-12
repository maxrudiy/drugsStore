import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import ordersRoutes from "./routes/orders.js";
import productsRoutes from "./routes/products.js";
import cookieParser from "cookie-parser";
import { errorMiddlewareLogger, errorMiddlewareResponce } from "./middlewares/error.js";

const PORT = process.env.PORT || 5001;

const whitelist = ["http://localhost:3000", "http://178.54.120.81:4500", "https://drugsstore-client.onrender.com"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/orders", ordersRoutes);
app.use("/products", productsRoutes);
app.use("/", (req, res) => res.send("Hello"));
app.use(errorMiddlewareLogger);
app.use(errorMiddlewareResponce);

const start = async () => {
  try {
    await new Promise((resolve, reject) => {
      mongoose.connect(process.env.DB_URL);
      mongoose.connection
        .on("connected", () => {
          console.log("Connected to db");
          return resolve();
        })
        .on("error", (err) => reject(err));
    });
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};
start();
