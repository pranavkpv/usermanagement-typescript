import express,{Request,Response} from 'express'
import {userService} from '../service/userService'

const newUserservice = new userService()

export const loginPage=(req:Request,res:Response)=>{
   try {
      res.render('user/login')
   } catch (error) {
      console.log(error)
   }
}

export const homePage=async (req:Request,res:Response)=>{
   try {
      const userData =await newUserservice.getUserBySession(req)   
      console.log(userData) 
      res.render('user/home',{userData})
   } catch (error) {
      console.log(error)
   }
}

export const loginCheck=async (req:Request,res:Response)=>{
   try {
      const {email,password} = req.body
      const message = await newUserservice.logincheck(email,password,req)
      res.status(201).json({message})
   } catch (error) {
      console.log(error)
   }
}

export const logoutUser = async (req:Request,res:Response)=>{
   try {
      const logOutmessage =await newUserservice.logoutUser(req)
      res.json({logOutmessage})
   } catch (error) {
      console.log(error)
   }
}

export const signUp = async(req:Request,res:Response)=>{
   try {
      res.render('user/signup')
   } catch (error) {
      console.log(error)
   }
}

export const signUpuser = async(req:Request,res:Response)=>{
   try {
      const {email,password,confirmPassword} = req.body
      console.log(req.body)
      const message = await newUserservice.signUpUser(email,password,confirmPassword)
      res.json({message})
   } catch (error) {
      console.log(error)
   }
}

