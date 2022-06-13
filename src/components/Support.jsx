import React from 'react'

import {PhoneIcon, ArrowSmRightIcon} from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid';

import supportImg from '../assets/support.jpg'

function Support() {
    return (
        <div name='support' className='w-full mt-24'>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="support" />
            </div>

            <div>
                <div className='max-w-[1240px] mx-auto text-white relative'>
                    <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                    <h3 className='text-5xl text-center font-bold py-8'>Finding the right team</h3>
                    <p className='text-3xl py-3 text-slate-300 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Dicta soluta laborum eligendi nobis quaerat et sint 
                        dolore blanditiis, molestiae earum iste, ad ut doloremque 
                        inventore? Dicta voluptatum nemo repellat neque!</p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <PhoneIcon className='w-16 p-4 bg-indigo-600 rounded-lg text-white mt-[-4rem]'/>
                            <h3 className='font-bold text-2xl my-6'>Sales</h3>
                            <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa sequi ut eum aliquam labore vel expedita nisi rerum, dolorem incidunt?</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/> </p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <SupportIcon className='w-16 p-4 bg-indigo-600 rounded-lg text-white mt-[-4rem]'/>
                            <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                            <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa sequi ut eum aliquam labore vel expedita nisi rerum, dolorem incidunt?</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/> </p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <ChipIcon className='w-16 p-4 bg-indigo-600 rounded-lg text-white mt-[-4rem]'/>
                            <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                            <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa sequi ut eum aliquam labore vel expedita nisi rerum, dolorem incidunt?</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support