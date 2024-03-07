

import  express from "express";

const router =express()

import myUserController from '../controllers/myUserController'
import { jwtCheck } from "../middleware/auth";


// /api/my/user
router.post('/', jwtCheck,myUserController.createCurrentUser)




export default router

