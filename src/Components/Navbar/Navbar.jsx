import React from 'react'
import './Navbar.css'
import { IoMailSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
        <div className='mail'>
            <span><IoMailSharp />  Jinukrishnan.p@gmail.com</span>
            <span><FaPhoneAlt />   +91-9567473317</span>
        </div>
      <div className='nav'>
            <div className="left">
                   <div className="home">
                    <a href="">Home</a>
                   </div>
                   <div className="category">
                        <a href="">Category</a>
                   </div>
                   <div className="about">
                    <a href="">About Us</a>
                   </div>
                   <div className="contact">
                    <a href="">Contact Us</a>
                   </div>
            </div>
            <div className="right">
                <select name="" id="">
                    <option value="">Sign in</option>
                    <option value="">Sign up</option>
                </select>
            </div>
      </div>
    </div>
  )
}

export default Navbar
