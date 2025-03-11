import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <footer className='bg-gray-800 px-4 md:px-16 lg:px-28 py-8 mt-52'>
    <div className='grid grid-cols-1 md:grid-cols-3'>
        <div>
            <h2 className='text-lg font-bold mb-4 text-white'>
                About Us
            </h2>
            <p className='text-gray-300'>
                we are a team dedicated to providing the best product and services to our customer.
            </p>
            <br/>
            <p className='text-gray-300'>
                Numetry Technologies Kalyani Nagar, Pune.
            </p>
        </div>
        <div>
        <h2 className='text-lg font-bold mb-4 text-white'>
                Quick Links
            </h2>
            <ul>
                <li><a href="/Homepage" className='hover:underline trxt-gray-300 text-white'>Home</a></li>
                <li><a href="/Contactpage" className='hover:underline trxt-gray-300 text-white'>Contact</a></li>
                <li><a href="/Aboutpage" className='hover:underline trxt-gray-300 text-white'>About</a></li>
                <li><a href="/Servicepage" className='hover:underline trxt-gray-300 text-white'>Services</a></li>
                
            </ul>
        </div>
        <div>
        <h2 className='text-lg font-bold mb-4 text-white'>
                Follow Us
            </h2>
            <ul className='flex space-x-4'>
                <li>
                {" "}<FaFacebookF className='text-blue-500'/>{" "}
                <a href="https://www.facebook.com/" className='hover:underline trxt-gray-300 text-white'>Facebook</a>
                </li>
                <li>
                <FaTwitter className='text-sky-500'/>
                <a href="https://x.com/?lang=en" className='hover:underline trxt-gray-300 text-white'>Twitter</a>
                </li>
                <li>
                <FaInstagram className='text-orange-500'/>
                <a href="https://www.instagram.com/accounts/login/?hl=en" className='hover:underline trxt-gray-300 text-white'>Instagram</a>
                </li>
            </ul>
            <br/>
            <h2 className='text-white'><a href=""></a>numetry@gmail.com</h2>
        </div>

    </div>
    <div className='border-t border-grey-600 p-6 text-gray-300 text-center mt-6'>
        <p>@NUMETRY TECHNOLOGIES</p>
    </div>
      
    </footer>
  )
}

export default Footer
