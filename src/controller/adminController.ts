import express,{Request,Response} from 'express'
import {userService} from '../service/userService'

const newuserService=new userService()

export const loginPage =async (req:Request,res:Response)=>{
   try {
      res.render('admin/login')
   } catch (error) {
      console.log(error)
   }
}

export const dashBoardPage = async (req: Request, res: Response) => {
   try {
     const SearchContent = String(req.query.search || "") ;
     const data = await newuserService.getUser(SearchContent);
     res.render('admin/dashboard', { data,SearchContent });
 
   } catch (error) {
     console.error('Error in dashBoardPage:', error);
     res.status(500).send('Internal Server Error');
   }
 }

 export const loginPost = async(req:Request,res:Response) =>{
   try {
      console.log("hai")
      res.redirect('/admin/dashboard')
   } catch (error) {
      console.log(error)
   }
 }
