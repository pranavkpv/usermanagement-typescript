import mongoose,{Document,Schema} from "mongoose";
import {admin} from './admin'

const adminSchema = new mongoose.Schema<admin>({
   username:{
      type:String
   },
   password:{
      type:String
   }
})

const Admin = mongoose.model('Admin',adminSchema)

const createDefaultAdmin = async()=>{
   const existAdmin=await Admin.findOne({username:'admin'})
   if(!existAdmin){
      await Admin.create({username:'admin',password:'admin@123'})
   }else{
      console.log('not created')
   }
}

mongoose.connection.once('open',async()=>{
   await createDefaultAdmin()
})


export default Admin;