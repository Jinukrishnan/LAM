import pkg from "jsonwebtoken";
const {verify}=pkg;
export async function Auth(req,res,next){
  try {
    

    const key=req.headers.authorization;
    if(!key) return res.status(403).send({msg:"Unautherised access"})
    const token=key.split(" ")[1];
    const auth=await verify(token,process.env.JWT_KEY)
    console.log("auth",auth);
    // if(!auth) 
    // {
    //   console.log("empty");
    // }
    req.user=auth
    next()
  } catch (error) {
    return res.status(401).send({msg:"Some Error Occured"})
  }

}