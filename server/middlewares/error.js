import ApiError from "../exceptions/api.js";

const errorMiddlewareLogger = (err, req, res, next) => {
  console.log(err);
  return next(err);
};

const errorMiddlewareResponce = (err, req, res, next) => {
  err instanceof ApiError
    ? res.status(err.status).json({ message: err.message })
    : res.status(500).json({ message: "Internal Server Error" });
};

export { errorMiddlewareLogger, errorMiddlewareResponce };
