import React from 'react'

export default function Team({ formData, handleInputChange, prevStep, submitForm }) {
  return (
    <div name="Team" className='max-w-screen-2xl container mx-auto px-4 md:px-20 flex flex-col items-center justify-center mt-10 mb-20'>
    <div className='w-1/2 p-5 bg-slate-300 rounded-xl shadow '>
    <h2 className="text-xl font-bold mb-4 text-center">Team Information</h2>

   
     <div className='flex flex-col mb-4 '>

     <label  className='block text-gray-700' htmlFor='team'>Team Name</label>
     <input name="team" type="text"  id ="team" placeholder='Enter Your Team name'
     onChange={handleInputChange('team')}
      className='shadow rounded-lg appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' />

     </div>
     <div className='flex flex-col mb-4'>
                <label className='block text-gray-700' htmlFor='members'>Team Members</label>
                <input id="members"
                name="members" type="number"  placeholder='Team Members' 
                value={formData.teamMembers}
                className='shadow rounded-lg appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' />

            </div>
     <div className='flex flex-col mb-4'>
                <label className='block text-gray-700' htmlFor='Tourtype'>Tournament type</label>
                <input id="Tourtype"
                name="Tourtype" type="text"  placeholder='Tournament type' 
                value={formData.Tourtype}
                onChange={handleInputChange('Tourtype')}
                className='shadow rounded-lg appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' />

            </div>
            <div className='flex justify-between'>
            <button 
            onClick={prevStep}
            className='bg-slate-500 text-xl text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300 '>Back</button> 
           
            <button 
            onClick={submitForm}
            className='bg-green-500 text-xl text-white rounded-xl px-3 py-2 hover:bg-green-700 duration-300 '>Submit</button>
            </div>

        
                  
    </div>
</div>
  )
}
