import express from "express";

const router = express.Router();

router.get("/", (req, res) => { 
    res.send("This is the test users")
})





export default router;
// Path: server/routes/routes.js