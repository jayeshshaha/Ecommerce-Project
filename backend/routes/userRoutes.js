import express from "express";
import { createUser, loginUser,logoutCurrentUser, getAllUsers, getCurrentUserProfile,updateCurrentUserProfile } from "../controllers/userController.js";


import {authenticated,authorizedAdmin} from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(createUser).get(authenticated,authorizedAdmin,getAllUsers)
router.post("/auth",loginUser);
router.post("/logout",logoutCurrentUser);


router.route("/profile").get(authenticated,getCurrentUserProfile).put(authenticated,updateCurrentUserProfile)

// ADMIN RELATED ROUTES ------------->


export default router;