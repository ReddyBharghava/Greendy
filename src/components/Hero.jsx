import React from 'react'
import Human from '../assets/images/2.svg'
import Logos from '../assets/images/logos.svg'
import Human2 from '../assets/images/3.svg'

const Hero = () => {
  return (
    <section className="bg-white transition duration-300">
        <div className='flex flex-row'>
            {/* {Content} */}
        <div className='space-y-8 p-8 m-10'>
      <p className='text-green-600 '>Award winning company </p>
      <h1 className='text-6xl'>Digital marketing <br/> agency and design.We<br/> grow your business <br/> online</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Mauris <br/>imperdiet felis egestas aug</p>
      <button className='border-1px border-amber-50 bg-green-400 p-3 m-3' >Start a project</button>
    </div>

    {/* {Image} */}
    <div >
        <img src={Human} alt="" 
        className='w-580px h-610.57px'/>
    </div>
        </div>

        <div >
            <img src={Logos} alt="" 
            className='pl-50'/>
        </div>

       <div className='flex'>
         {/* {Text} */}

        <div className='space-y-8 p-8 m-10'>
            <p className='text-green-600'>Who we are</p>
            <h2 className='text-4xl'>Top #1Marketing <br/> agency in the world</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing <br/>elit. Vel non recusandae eveniet atque eius efusa <br/>pariatur laboriosam nisi minus, dignissimos  <br/>impedit hic eligendi.</p>
            <button className='border-1px border-white bg-slate-950 text-white p-3 m-3'>Get in Touch</button>
        </div>
            <div className='pl-44 pt-8'>
                {/* {Image} */}
                <img src={Human2} alt="" 
                className='w-598.46px h-628px'/>
            </div>
       </div>
    </section>
  )
}

export default Hero
