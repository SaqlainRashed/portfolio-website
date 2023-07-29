import Image from 'next/image';
import React from 'react';
import appImg from '../public/assets/projects/app.jpg';
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
          src={appImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>360-Degree Pandal Viewer App</h2>
          <h3>Android Studio / Insta360 Studio / Kuula</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          The 360-Degree Pandal Viewer App was specially crafted for the Assistant DM of Hoogly District to commemorate the joyous occasion of Jagdharti Puja. Developed using Android Studio, this innovative app offers an immersive and captivating experience for users to virtually explore the intricately designed pandals of Hoogly District.<br></br>
          Through the use of cutting-edge 360-degree cameras(Insta360 X2) and the powerful Kuula platform, the app enabled users to take virtual tours of each pandal, allowing them to view the magnificent decorations from every angle. Moreover, the integration of GPS technology allows users to effortlessly locate their desired pandal with just a click, ensuring a seamless experience.
          The app further encourages community engagement by featuring a rating and comment section, enabling users to express their thoughts and appreciation for the artistic creations. Overall, this app not only brings the spirit of Jagdharti Puja to life but also showcases the rich cultural heritage of Hoogly District in a modern and interactive manner.
          </p>
          <a
            href='https://github.com/SaqlainRashed/360-Pandal-Viewer_App'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Android Studio
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Insta360 X2 Camera
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Insta360 STUDIO
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Insta360 Device Control App
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Google Maps
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Kuula
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
