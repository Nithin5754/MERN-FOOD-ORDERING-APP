
import express,{Request,Response} from 'express'

import cors from 'cors'
import 'dotenv/config'


const app=express()
app.use(express.json())
app.use(cors())


app.get('/test',async(req:Request,res:Response)=>{
  res.json({message:'hello nithin joji '})
})

app.all('*',(req:Request,res:Response)=>{
  res.json({message:'error 404'})
})



app.listen(4000,()=>console.log("server started")
)


