import { Router } from "express";
import userRoutes from "../modules/user/routes.js";
import productRoutes from "../modules/products/routes.js";
import uploadRoutes from "../modules/uploads/routes.js";
import categoryRoutes from "../modules/category/routes.js";
const router = Router();

router.use("/users",userRoutes);
router.use("/products",productRoutes);
router.use("/uploads" ,uploadRoutes);
router.use("/categories",categoryRoutes);



export default router;