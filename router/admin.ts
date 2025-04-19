import express from 'express'
const router = express.Router()
import {loginPage,dashBoardPage,loginPost} from '../src/controller/adminController'


router.get('/login',loginPage)
router.get('/dashboard',dashBoardPage)

export default router