import express,{Request,Response} from 'express'
const app = express();
import userRouter from './router/user'
import adminRouter from './router/admin'
import {Mongo} from './db/connectDB'
import userModel from './src/model/userSchema'
import session from 'express-session'
import Admin from './src/model/adminschema'

app.use(session({
   secret: 'your-secret-key',  // Keep this secure
   resave: false,
   saveUninitialized: true,
   cookie: { secure: false } // Use `true` in production with HTTPS
 }));

 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 
app.set('view engine','ejs')
app.use('/user',userRouter)
app.use('/admin',adminRouter)
const dataBase = new Mongo();
dataBase.connect()


app.listen(3000,()=>console.log("server connected successfully"))



