import React, { useEffect, useState } from 'react'
import './AdminHome.scss'
import axios from 'axios';
const AdminHome = () => {
    const [admin,setAdmin]=useState("")
    async function getAdmin(){
        const token=localStorage.getItem("admin_token");
        console.log(token);
        const res= await axios.get("http://localhost:3001/lam/adminhome",{headers:{Authorization:`Bearer ${token}`}})
        console.log(res.status);
       if(res.status==200)
       {
        setAdmin(res.data)
       }
       else{
        console.log("hello");
       }
        
    }
    useEffect(()=>{
        getAdmin()
    },[])
  return (
    <div className='adminhome'>
      <nav className='navbar'>
        <div className="child1">
            Lam
        </div>
        <div className="child2">
                <div className='subchild'>
                    {admin}
                </div>
                <div className='subchild'>
                    logout
                </div>
        </div>
      </nav>
    </div>
  )
}

export default AdminHome
