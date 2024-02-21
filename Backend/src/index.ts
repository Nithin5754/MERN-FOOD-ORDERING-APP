
import express,{Request,Response} from 'express'

import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'



mongoose
.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(()=>console.log("database connected")
).catch((err)=>console.log('database error: ',err)
)


const app=express()
app.use(express.json())
app.use(cors())


app.get('/test',async(req:Request,res:Response)=>{
  res.json({message:'hello nithin joji '})
})

app.all('*',(req:Request,res:Response)=>{
  res.json({message:'error 404'})
})



app.listen(4000,()=>console.log("server started local host :4000")
)


