import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import { IoCloseSharp } from "react-icons/io5"
import {Link } from "react-scroll"


function Navbar() {
    const [menu,setMenu]=useState(false)
    const navitems = [
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About Us"
        },
        {
            id:3,
            text:"Tournaments"
        },
        {
            id:4,
            text:"Register"
        }
        
    ]
  return (
    <div className='max-w-screen-2xl container pb-10 px-4 md:px-20 h-16 shadow-2xl fixed top-0 left-0 right-0  bg-slate-500 md:bg-black'>
        <div className='flex justify-between items-center h-16 '>
            <div className='flex  '> 
            <h1 className='font-bold text-2xl cursor-pointer text-white text-justify pt-1'>XYZ
            <p className='text-xs'>Organization</p>
            </h1>
            </div>
            {/* /desk nav bar */}
            <div >
                <ul className='hidden md:flex space-x-3 '>
                    {
                        navitems.map(({id,text}) =>(
                            <li className='hover:scale-105 duration-200 cursor-pointer text-white hover:text-yellow-400 ' keys={id}>
                                <Link to={text} smooth={true} duration={500} offset={-70} activeClass="active">
                                {text}
                                </Link>
                           </li>
                        ))
                    }
                    
                </ul>
                <div onClick={()=>setMenu(!menu)} className='md:hidden '>
                    { menu?<IoCloseSharp size={24}/>:<AiOutlineMenu size={24}/>}
                    </div>
                
            </div>
        </div>
{/* mobile nav bar */}
       { menu && (
        <div className='bg-white'>  
            
        <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3'>
        {
                        navitems.map(({id,text}) =>(
                            <li className='hover:scale-105 duration-200 cursor-pointer font-semibold text-xl' keys={id}>
                                <Link onClick={()=>setMenu(!menu)}
                                to={text} smooth={true} duration={500} offset={-70} activeClass="active">
                                {text}
                                </Link>
                                </li>
                        ))
                    }
        </ul>                     
    </div>
       )}

        
     <hr />
    </div>
    
  )
}

export default Navbar
