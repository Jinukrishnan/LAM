import bcrypt from 'bcrypt'
import adminSchema from './models/admin.model.js'
import pkg from 'jsonwebtoken'
const {sign}=pkg;

export async function AdminRegister(req,res)
{
    
   try{
    const{name,email,password}=req.body;
   
    if(!(name&&email&&password))
    return res.status(200).send({msg:"fields are empty"})
    const data=await adminSchema.findOne({email})
    if(data) return res.status(200).send({msg:"email already exist"})
    bcrypt.hash(password,10)
    .then((hashedpwd)=>{
        adminSchema.create({name,email,password:hashedpwd})
    })
    .then((result)=>{
    return res.status(201).send({msg:"Successsfully Registered",result})
    })
    .catch((error)=>{
    return res.status(400).send({msg:"Not Register",error})

    })
    
   }
   catch(error){
    return res.status(500).send(error)
   }   
}
export async function AdminLogin(req,res){
 
  try {
    const {email,password}=req.body;
    const admin=await adminSchema.findOne({email});
    if(admin==null)return res.status(401).send({error:"Incorrect Username or Password"})
    const success=await bcrypt.compare(password,admin.password)
    if(success!==true)return res.status(401).send({error:"Incorrect Username or Password"})
    const {name}=admin
    const token=await sign({name},process.env.JWT_KEY,{expiresIn:"15s"})
    return res.status(200).send({msg:"successfully loged in",token})
  } catch (error) {
    return res.status(500).send(error)
    
  }



}
export async function AdminHome(req,res){
    const{name}=req.user
    console.log(req);
  res.status(200).send(name)
}