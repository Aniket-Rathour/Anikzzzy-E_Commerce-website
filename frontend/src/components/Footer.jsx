import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div className=''>
                <img src={assets.logo} className='mb-5 w-32'></img>
                <p className='w-full md:w-2/3 text-gray-600'>
                    adfadfadfadfadf adfadf adfadfadf adfadfadf adfadfadfadfadf adfadfadf adf adfad
                    fadfadf adfadf adfv
                    adfadfadfadfadf adfadf adfadfadf adfadfadf adfadfadfadfadf adfadfadf adf
                    adfadfadfadfadf adfadf adfadfadf adfadfadf adfadfadfadfadf adfadfadf adf adfadfa
                    dfadfadf adfadf                    adfadfadf adfadfadf adfadfadfadfadf adfadfadf adf
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us </li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'> GET IN TOUCH</p>
            </div>

        </div>
    </div>
  )
}

export default Footer