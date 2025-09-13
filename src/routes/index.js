import { Router } from "express";
import userRoutes from "../modules/user/routes.js";
import productRoutes from "../modules/products/routes.js";
import uploadRoutes from "../modules/uploads/routes.js";
const router = Router();

router.use("/users",userRoutes);
router.use("/products",productRoutes);
router.use("/uploads" ,uploadRoutes);



export default router;