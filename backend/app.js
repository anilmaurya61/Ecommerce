const express = require("express");
const cookieParser = require("cookie-parser")
const app = express();

const errorMiddleware = require("./middleware/error");

app.use(express.json())
app.use(cookieParser())

// Route Imports
const Product = require("./routes/productRoute");
const User = require("./routes/userRoute");

app.use("/api/v1",Product);
app.use("/api/v1",User);

// MiddleWare for Errors

app.use(errorMiddleware);

module.exports = app;