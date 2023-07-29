import Image from 'next/image';
import React from 'react';
import todoImg from '../public/assets/projects/todo.png';
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
          src={todoImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Todo App</h2>
          <h3>React / Node / Express / MongooDB </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          The TODO List is an efficient and user-friendly web application developed using an impressive tech stack, including React, Node.js, Axios, Mongoose, Bcrypt, Express, JWT, React-Hot-Toast, and Sass. This powerful combination of technologies allows for a seamless user experience and robust functionality.<br></br>
          With the TODO List, users can create their accounts securely, thanks to the implementation of Bcrypt for password hashing. Upon registration and authentication using JSON Web Tokens (JWT), users gain access to a personalized workspace where they can easily manage their tasks.<br></br>
          The app enables users to create, complete, modify, and delete tasks as per their requirements, providing a dynamic and flexible task management system. React-Hot-Toast adds interactive notifications, enhancing user engagement and feedback.<br></br>
          Overall, this TODO List web application streamlines task organization and empowers users to stay productive with a simple, yet comprehensive task management solution.
          </p>
          <a
            href='https://github.com/SaqlainRashed/todoapp_nodejs'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Backend Code</button>
          </a>
          <a
            href='https://github.com/SaqlainRashed/todoapp_react'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Frontend Code</button>
          </a>
          <a
            href='https://todo.saqlainrashid.dev/'
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
                <RiRadioButtonFill className='pr-1' /> React       
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Node
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MongoDB
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Express
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Bcrypt
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JWT
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React-Hot-Toast
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Axios
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Sass
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
