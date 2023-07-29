import Image from 'next/image';
import React from 'react';
import tlmImg from '../public/assets/projects/tlm.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const netflix = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={tlmImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Selective Tea Plucker</h2>
          <h3>Fusion 360 / Python / Putty</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          This project, called the Selective Tea Plucker, was developed for AgriEnics conducted by the Center for Development of Advanced Computing. The first stage of the project involved creating a comprehensive 3D working model based on any ideation, followed by conducting feasibility tests and presenting the results in a presentation format to the jury panel, after clearing two consicutive online rounds. After successfully progressing to the second round of evaluation, I received funding from the organization to complete the project within a specified timeline.
          <br></br>
          During the second stage, the focus shifted towards constructing the mechanical structure of the project. This phase involved significant machining of metal parts and aligning them according to the 3D design. Once the structure was ready, the mechanical assembly of the moving parts commenced. The movement of the Clamp/Cutting arm in all X, Y, and Z directions was achieved using a Lead Screw, driven by stepper motors (specifically Nema23 and Nema17). To control these stepper motors, a Raspberry Pi 4B (8GB variant) and motor drivers (TB6600 and TB6560) were employed. The entire system was configured to operate at 36V, and a Python-based graphical user interface (GUI) was developed to display information on a touchscreen integrated into the frame.
          <br></br>
           The Selective Tea Plucker incorporates a 3D camera positioned atop the device to capture images of tea plants. These images are subsequently processed in the RasberryPi 4B, enabling the identification and marking of the coordinates for the tea buds that are ready for plucking—specifically, two leaves and one new bud. The marked coordinates are then stored in a text file. To initiate the plucking process, a Python program designed for the mechanical plucker movement is executed. This program retrieves the coordinate file and utilizes the information to accurately extract the precise positions of the tea leaves. With this information, the plucking mechanism is engaged to harvest the identified leaves accordingly.
          <br></br>
          In the third stage, an on-field demonstration was conducted at a government-owned Assam Tea Garden. The project required modifications to make it suitable for fieldwork. The outer structure of the plucker was reinforced with a highly durable 3/4 inch square frame, and the bed was made adjustable in the z-axis. Additionally, the structure was modified to be remotely controlled using complex connection of relax and switches, enabling manipulation of its movement in all directions. This maneuverability was achieved by implementing a complex hub motor and gear box combination on each side. To gain a clearer understanding of the project, please refer to the working video.
          </p>
          <a
            href='https://drive.google.com/file/d/1bUY1hJh3ebu_G1VKlFftaTnwX41HXjZI/view?usp=drivesdk'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Working Video</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Fusion 360
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Blender
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Python
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> OpenCV
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Numpy
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> tkinter
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tensorflow
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> keras
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> SmartDraw.io
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

export default netflix;
