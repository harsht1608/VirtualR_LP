import React from 'react'
import { CheckCircle } from 'lucide-react'
import codeImg from '../assets/code.jpg'
import { checklistItems } from '../constants'

const WorkFlow = () => {
  return (
    <div className='mt-20'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-centre mt-6 tracking-wide'>Accelerate your 
            <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>{" "} coding workflow.</span>
        </h2>
        <div className='flex flex-wrap justify-centre'>
            <div className='p-2 w-full lg:w-1/2'>
                <img src={codeImg} alt="Code" />
            </div>
            <div className='pt-12 w-full lg:w-1/2'>
                {checklistItems.map((item,index) => (
                    <div key={index} className='flex mb-12'>
                        <div className='text-green-400 mx-6 bg-neutral-900 h-10 w-0 p-2 justify-center items-center rounded-full'>
                            <CheckCircle />
                        </div>
                        <div>
                            <h5 className='mt-1 mb-2 text-xl'>{item.title}</h5>
                            <p className='text-m text-neutral-500'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default WorkFlow