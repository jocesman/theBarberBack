import { Router } from "express";

const healthRouter: Router = Router();

healthRouter.get("/health", (req, res) => {
    res.status(200).send("OK");
});

export default healthRouter;