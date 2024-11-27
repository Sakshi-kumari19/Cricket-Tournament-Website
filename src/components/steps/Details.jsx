import React from 'react'



export default function Details({ formData, handleInputChange, nextStep,prevStep }) {
  return (
    <div name="Basic" className='max-w-screen-2xl container mx-auto px-4 md:px-20 flex flex-col items-center justify-center mt-10 mb-20'>
        <div className='w-1/2 p-5 bg-slate-300 rounded-xl shadow '>
            <h2 className="text-xl font-bold mb-4 text-center">Additional Details</h2>

        
            <div className='flex flex-col mb-4 '>

            <label  className='block text-gray-700' htmlFor='name'>State</label>
            <input name="state" type="text"  id ="state" placeholder='State name' 
            onchange={handleInputChange('state')}
            className='shadow rounded-lg appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' />

           </div>
           <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700' htmlFor='name'>District</label>
                    <input id="dist"
                    name="dist" type="text"  placeholder='District name' 
                    value={formData.dist}
                    onChange={handleInputChange('dist')}
                    className='shadow rounded-lg appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' />

           </div>
           <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700' htmlFor='name'>Pincode</label>
                    <input id="pin"
                    name="pin" type="number" placeholder='Pincode' 
                    value={formData.pin}
                    onChange={handleInputChange('pin')}
                    className='shadow rounded-lg appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' />

           </div>
           <div className='flex justify-between'>
            <button 
            onClick={prevStep}
            className='bg-slate-500 text-xl text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300 '>Back</button> 
           
            <button 
            onClick={nextStep}
            className='bg-green-500 text-xl text-white rounded-xl px-3 py-2 hover:bg-green-700 duration-300 '>Next</button>
            </div>   

                     
                      
        </div>
    </div>
  )
}
