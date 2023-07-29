import Image from 'next/image';
import React from 'react';
import lmsImg from '../public/assets/projects/Library Management System.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const property = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={lmsImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Library Management System</h2>
          <h3>PHP / MySQL / JavaScript</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          The Library Management System (LMS) is a college project developed using PHP, MySQL, JavaScript, HTML, and CSS. The system provides an efficient and user-friendly platform for managing library resources and user data. It includes an admin login feature for authorized personnel to access administrative functionalities.<br></br>
          The LMS allows the admin to perform various tasks, including managing the library books inventory by adding, editing, and deleting books. The system also tracks the number of times books have been issued and returned, helping to monitor popular titles and manage book circulation effectively.
          Additionally, the LMS keeps a record of registered users, enabling the admin to manage user accounts and track user activities. The system also offers a comprehensive list of authors and categories for better organization and easier book retrieval. Overall, this LMS project streamlines library operations and enhances the user experience for both administrators and library patrons.
          </p>
          <a
            href='https://github.com/SaqlainRashed/Library-Management-System'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://drive.google.com/file/d/1giu1L8Ipebc8YWYn0nZi8yZuwJKbWcp8/view'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>SRS Document</button>
          </a>
          <a
            href='https://librarysaqlain.000webhostapp.com/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Visit</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> PHP
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MySQL
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HTML
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> BootStrap
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
