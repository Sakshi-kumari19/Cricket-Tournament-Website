import React from 'react'

import T20 from "../../public/t20.jpg"
import  state from "../../public/statelevel.jpg"
import  dist from "../../public/distlevel.jpg"
import   subd from "../../public/subdist.jpg"

function Tournament() {
  const itemcard=[
    {
       id:1, 
       logo:T20,
       name:"T20"
    },
    {
       id:2, 
       logo:state,
       name:"State Level"
    },
    {
       id:3, 
       logo:dist,
       name:"District Level"
    },
    {
       id:4, 
       logo:subd,
       name:"Sub-District level"
    }
    
  ]
  
  return (
    <div name="Tournaments" className='max-w-screen-2xl container mx-auto px-4 md:px-20  bg-orange-400'>
        <div>
        <h1 className='text-4xl font-bold mb-10 text-center text-black pt-10 '>
            Tournaments <span className='text-white '>We</span> Organize 
        </h1>
       
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10 ' >
            {
                itemcard.map(({id,logo,name})=>(
                    <div className='md:w-[400px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 bg-orange-300 ' key={id}>
                        <img src={logo} className='w-[400px] h-[150px] p-1 rounded-2xl border-[2px] ' />
                        <div>
                            <div className='px-2 font-semibold mb-2 text-center text-xl'>{name}</div>
                            <p className='px-2 text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className=' space-x-4 px-6 py-4 items-center flex justify-center  '>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 py-2 rounded shadow-xl '>Know More</button>
                        </div>
                    </div>
                ))
            }
        </div>


        </div>
        <hr />
    </div>
  )
}

export default Tournament
