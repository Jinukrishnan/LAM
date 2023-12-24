import express from 'express'
import env from 'dotenv'
import connect from './connection.js'
import router from './router.js'
import cors from 'cors'
env.config()
const app=express()
app.use(express.json())
app.use(cors())
app.use('/lam',router)
app.use(express.static('dist'))
connect()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server starteda at ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log(error);
})