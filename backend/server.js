import express from "express";
const app = express();
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import usersRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errormidleware.js";
connectDB();
dotenv.config();

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", usersRoutes);
app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server pokrenut u ${process.env.NODE_ENV} modu na portu ${PORT}`)
);
