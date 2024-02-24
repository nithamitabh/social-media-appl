import express from "express";
import userRoutes from "./user.route.js";

const router = express.Router();

const baseUrl = "api/v1";


router.use(`/${baseUrl}/users`, userRoutes);




export default router;
// Path: server/routes/routes.js