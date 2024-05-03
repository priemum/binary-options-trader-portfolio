import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Financial Freedom Services</h1>
        <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet aliquam nisi, vel ultricies erat.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaLinkedin size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
          <h6 className='font-medium text-gray-400'>Services</h6>
          <ul>
            <li className='py-2 text-sm'>Binary Options Trading</li>
            <li className='py-2 text-sm'>Financial Planning</li>
            <li className='py-2 text-sm'>Investment Portfolio Management</li>
            <li className='py-2 text-sm'>Wealth Building Strategies</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Resources</h6>
          <ul>
            <li className='py-2 text-sm'>Articles</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>E-books</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Company</h6>
          <ul>
            <li className='py-2 text-sm'>About Us</li>
            <li className='py-2 text-sm'>Contact Us</li>
            <li className='py-2 text-sm'>Terms of Service</li>
            <li className='py-2 text-sm'>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
