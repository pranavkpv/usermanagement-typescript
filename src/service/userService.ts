import { userRepository } from '../repositories/userRepository';
import {User} from '../model/user'


const newUserRepository = new userRepository();

export class userService {
   async addUser(username:string,password:string):Promise<string>{
      const existingUser = await newUserRepository.findUserByUsername(username);
      if(username.trim()=="" || password.trim()==""){
         return `should enter username and password`
      }
      if(existingUser){
         return `user already exist`
      }
      const newUser = await newUserRepository.createUser({username,password} as User)
      return `user ${newUser.username} created successfully`
   }

   async getUser(SearchContent:string){
      const allUser = await newUserRepository.findAllUser(SearchContent)
      return allUser
   }
   async editUser(Id:string,username:string,password:string):Promise<string>{
      if(username.trim()=="" || password.trim()==""){
         return `should enter username and password`
      }
      const existUser =await newUserRepository.findUserNotThatId(Id,username)
      if(existUser){
         return `user already exist`
      }
      await newUserRepository.editUser(Id,{username,password});
      return 'user updated successfully'
   }

   async deleteUser(Id:string){
      await newUserRepository.userDelete(Id)
      return `user deleted successfully`
   }
   async logincheck(username:string,password:string,req:any){
      const findUser= await newUserRepository.findByuserNameandPassword(username,password)
      if(!findUser){
         return `wrong data enter`
      }else{
         req.session.user = findUser._id
         return `login successfully`
      }
   }
   async getUserBySession(req:any){
      return newUserRepository.findUserById(req.session.user)
   }

   async logoutUser(req:any){
      req.session.destroy()
      return 'logout successfully'
   }


   async signUpUser(username:string,password:string,confirmPassword:string):Promise<string>{
      const existingUser = await newUserRepository.findUserByUsername(username);
      if(username.trim()=="" || password.trim()=="" || confirmPassword.trim() == ""){
         return `should enter username and password`
      }
      if(password.trim()!= confirmPassword.trim()){
         return `Password is not match`
      }
      if(existingUser){
         return `user already exist`
      }
      const newUser = await newUserRepository.createUser({username,password} as User)
      return `user ${newUser.username} created successfully`
   }
   
}

 