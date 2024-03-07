import express from "express";

const router = express();

import myUserController from "../controllers/myUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";

// /api/my/user
router.post("/", jwtCheck, myUserController.createCurrentUser);

router.post(
  "/",
  jwtCheck,
  jwtParse,
  validateMyUserRequest,
  myUserController.updateCurrentUser
);

export default router;
