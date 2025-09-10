import { Router } from "express";
import userRoutes from "../modules/user/routes.js";
// import productRoutes from "../modules/product/routes.js";
const router = Router();

router.use("/users",userRoutes);
// app.use("/products",productRoutes);



export default router;