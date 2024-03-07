

import  express from "express";

const router =express()

import myUserController from '../controllers/myUserController'


// /api/my/user
router.post('/',myUserController.createCurrentUser)




export default router

