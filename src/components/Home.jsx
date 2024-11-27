import React from 'react'
import {Link } from "react-scroll"
import { ReactTyped } from "react-typed";
import Stepper from './Stepper';


function Home() {
  return (<>
    <div name="Home" className='max-w-screen-2xl container pb-10  px-4 md:px-20 mt-10   bg-[url("/groundimage.jpg")] bg-cover h-screen' >
        <div className='flex flex-col md:flex-row '>
                <div className=' mt-20 md:mt-20 space-y-0  md:order-1 '>
                  <span className=' text-2xl md:text-3xl'>Unleash Your</span>

                  <div className='flex space-x-1 text-4xl  md:text-6xl'>
                  
                  <ReactTyped
                          className='font-bold text-white '
                          strings={["Team","Sports"]}
                          typeSpeed={100}
                          backspeed={10}
                          loop={true}
                          />
                   
                  <h1 className='font-bold'>Spirit</h1>

                  </div>
                    <br />
                      <p className='md:text-xl  md:text-md text-justify '>Join the upcoming tournament. 
                      </p><br />
                      <p className='font-bold md:text-lg'>Register Your Team  
                                
                      <button className='bg-red-600 text-white rounded-lg px-5 py-2 hover:bg-red-800 duration-30'>Now</button>
                      </p>
                  
                  </div>
               
        </div>
        
      
      
    </div>
   
    </>
  )
}

export default Home
