import React from 'react'

function About() {
  return (
    <div name="About Us" className='max-w-screen-2xl container mx-auto px-4 pt-10 md:px-20 flex flex-col  bg-black
     '>
     <div><h1 className='text-5xl  font-bold mb-5 text-center text-white pb-10'>Who <span className='text-yellow-400'>We</span> Are ?</h1></div> 
     <div className='flex flex-col md:flex-row pb-20'>

<div className='md:w-1/2'>
<img src="match.jpg" alt="" className='rounded-3xl shadow-2xl pb-5' />
</div>

<div className='md:w-1/2'>

<p className='text-justify text-white font-sans'> XYZ Organization is a dynamic sports organization dedicated to fostering the spirit of cricket. 
  Established with a passion for the game, <span className='underline text-yellow-400'>we organize and conduct cricket tournaments</span>   in various formats, 
  offering a platform for players at all levels to showcase their skills and passion for the sport. <br /> <br /> <br />
  At XYZ Organization, our mission is to bring together cricket enthusiasts from diverse backgrounds and 
  provide them with the opportunity to participate in well-organized, competitive, and fun tournaments. 
  We are committed to promoting sportsmanship, teamwork, and the love of cricket while creating memorable 
  experiences for players and fans alike.       
   </p><br />

</div>



</div>
      
      

    </div>
  )
}

export default About
