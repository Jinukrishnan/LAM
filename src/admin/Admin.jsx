import React, { useState } from 'react'
import axios from 'axios'
import './Admin.css'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
    const navigate=useNavigate()
    const [signval,setSignVal]=useState({
        name:"",
        email:"",
        passowrd:"",
        cpassword:""
    })
    const [logval,setLogVal]=useState({
        email:"",
        passowrd:"",
    })
    // admin register
    const getSignData=(e)=>{
        
        setSignVal((pre)=>({...pre,[e.target.name]:e.target.value}))
    }
    const Signin=async(e)=>{
        e.preventDefault();
        const{name,email,password,cpassword}=signval
        if(password===cpassword)
        {
                const res=await axios.post("http://localhost:3001/lam/adminregister",signval);
           
                if(res.status==201)
                {
                    alert(res.data.msg)
                }
                else{
                    alert(res.data.msg)

                }
        }
        else
        {
            alert("Password not Matched")
        }
    }
    // admin login
const getLogData=(e)=>{
    console.log(e.target.value);
    setLogVal((pre)=>({...pre,[e.target.name]:e.target.value}))
}
const Login=async(e)=>{
    e.preventDefault();
    const{email,password}=logval
    console.log(email,password);
    if(!(email&&password))
    {
        alert("Fields are empty")
    }
    else
    {
        const res=await axios.post("http://localhost:3001/lam/adminlogin",logval);
        console.log(res.data);
        const{token}=res.data;
        console.log(typeof(token));
        localStorage.setItem('admin_token',token)
        navigate("/adminhome")
    }
}
  return (
    <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div className="signup">
				<form onSubmit={Signin}>
					<label htmlFor="chk" aria-hidden="true">Sign up</label>
					<input onChange={getSignData} type="text" name="name" placeholder="User name" required=""/>
					<input onChange={getSignData} type="email" name="email" placeholder="Email" required=""/>
					<input onChange={getSignData} type="password" name="password" placeholder="Password" required=""/>
					<input onChange={getSignData} type="password" name="cpassword" placeholder="Confirm Password" required=""/>
					<button>Sign up</button>
				</form>
			</div>

			<div className="login" onSubmit={Login}>
				<form>
					<label htmlFor="chk" aria-hidden="true">Login</label>
					<input onChange={getLogData} type="email" name="email" placeholder="Email" required=""/>
					<input onChange={getLogData} type="password" name="password" placeholder="Password" required=""/>
					<button>Login</button>
				</form>
			</div>
	</div>
  )
}

export default Admin
