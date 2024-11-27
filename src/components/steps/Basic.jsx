import React from 'react'

export default function Basic({ formData, handleInputChange, nextStep }) {
  return (
    <div name="Basic" className='max-w-screen-2xl container mx-auto px-4 md:px-20 flex flex-col items-center justify-center mt-10 mb-20'>
        <div className='md:w-1/2 p-5 bg-slate-300 rounded-xl shadow '>
            <h2 className="text-xl font-bold mb-4 text-center">Basic Details</h2>

        
            <div className='flex flex-col mb-4 '>

            <label  className='block text-gray-700' htmlFor='name'>Full Name</label>
            <input name="name" type="text"  id ="name" placeholder='Enter Your fullname' 
            onchange={handleInputChange('name')}
            className='shadow rounded-lg appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' />

           </div>
           <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700' htmlFor='name'>Email Address</label>
                    <input id="email"
                    name="email" type="text"  placeholder='Email Address' 
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    className='shadow rounded-lg appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' />

           </div>
           <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700' htmlFor='name'>Contact No</label>
                    <input id="Contact"
                    name="Contact" type="tel" pattern='[0-9]{10}' placeholder='Contact No' 
                    value={formData.Contact}
                    onChange={handleInputChange('Contact')}
                    className='shadow rounded-lg appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' />

           </div>
               

           <div className='text-right'>
                <button type="submit" 
                onClick={nextStep}
                className='bg-green-500 text-xl text-white rounded-xl px-3 py-2 hover:bg-green-700 duration-300 '>Next</button>
           </div>            
                      
        </div>
    </div>
  )
}
