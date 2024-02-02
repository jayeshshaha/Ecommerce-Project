import express from "express";
import { createUser, loginUser,logoutCurrentUser, getAllUsers } from "../controllers/userController.js";
import {authenticated,authorizedAdmin} from "../middlewares/authMiddleware.js";
// import {authenticated, authorizedAdmin} from "../middlewares/authMiddleware.js";


const router = express.Router();

router.route("/").post(createUser).get(authenticated,authorizedAdmin,getAllUsers)
router.post("/auth",loginUser);
router.post("/logout",logoutCurrentUser);


export default router;