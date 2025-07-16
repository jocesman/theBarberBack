import { Router } from "express";
import userRouter from "./userRouter";
import appointmentRouter from "./appointmentRouter";
import accessRouter from "./accessRouter";
import healthRouter from "./healthRouter";

const router: Router = Router();

router.use("/users", userRouter);
router.use("/turns", appointmentRouter);
router.use("/login", accessRouter);    
router.use("/recuperarAcceso", accessRouter);
router.use("/contacto", accessRouter);
router.use("/health", healthRouter);

export default router;