import React,{useState} from 'react'
import Basic from './steps/Basic'
import Details from './steps/Details'

import Team from './steps/Team'
import toast from 'react-hot-toast';

function Stepper() {
    const initialstate ={
        name:'',
        email:'',
        Contact:'',
        state:'',
        dist:'',
        pin:'',
        team:'',
        members:'',
        Tourtype:''
    };
    
    const [step,setStep]=useState(1);
    const [formData,setFormData]=useState(initialstate);
  

  const handleInputChange = (input) => (e) => {
    setFormData({...formData, [input]: e.target.value});
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const resetForm = () => {
    setFormData(initialstate); 
    setStep(1);                   
  };

  const submitForm =()=>{
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify(formData),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log('Form  submitted',data);
        toast.success('Form submitted Successfully!');

        resetForm();
    })
    .catch(error =>{
        console.error('Error',error);
        toast.error('Form Submission failed')
    });
  };
  return (
    <div name='Register'>
        <h1 className='text-4xl  font-bold mb-4 text-center pt-10'>Registration Form</h1>
        
        {step ===1 &&(
            <Basic
               formData={formData}
               handleInputChange={handleInputChange}
               nextStep={nextStep}
            />
        )}
        {step ===2 &&(
            <Details
               formData={formData}
               handleInputChange={handleInputChange}
               prevStep={prevStep}
               nextStep={nextStep}
            />
        )}
        {step === 3 && (
            <Team
               formData={formData}
               handleInputChange={handleInputChange}
               prevStep={prevStep}
               submitForm={submitForm}
            />
        )}
      
    </div>
  )
}

export default Stepper
