import express from "express";
import { loginUser, registerUser } from "../controllers/userControllers.js";
import passport from "passport";

const router = express.Router();
// test route
router.get("/test",(req,res)=>{
    res.send({
        success:true,
        message:"test routes works"
    })
})

// register route
router.post("/register",registerUser);

// login route
router.post("/login",passport.authenticate("local"),loginUser);

export default router;