import express,{Request,Response} from 'express'
const router = express.Router()
import {loginPage,homePage,loginCheck,logoutUser,signUp,signUpuser} from '../src/controller/usercontroller'
import {addUser,editUser,deleteUsers} from '../src/controller/usermanageController'

router.get('/',(req:Request,res:Response)=>{
   res.send("Hello javascript")
})

router.get('/login',loginPage)
router.post('/login',loginCheck)
router.get('/home',homePage)

router.post('/addUser',addUser)
router.post('/editUser',editUser)
router.post('/delete',deleteUsers)
router.post('/logout',logoutUser)


router.get('/signup',signUp)
router.post('/signup',signUpuser)



export default router