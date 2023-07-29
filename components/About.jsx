import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          I am a Computer Science Engineering student and a passionate and skilled full-stack developer with a keen eye for crafting exceptional web experiences.
          My expertise lies in crafting mobile-responsive front-end UI applications that seamlessly integrate with APIs and diverse backend technologies. My insatiable passion for learning drives me to stay abreast of new technologies and embrace versatile approaches to task completion. My proficiency predominantly lies in HTML, CSS, JavaScript, and React for front-end development, while I also possess adept knowledge in PHP, Node, Express, MongoDB, and MySQL for backend operations. My adaptability as a quick learner enables me to swiftly grasp new tech stacks when necessary, ensuring optimal solutions for each project. 
          </p>
          <p className='py-2 text-gray-600'>
          In my journey, which commenced in 2021, I gained experience managing multiple e-commerce websites on CMS platforms like WordPress and Shopify. I have cultivated exceptional communication skills, effectively collaborating with clients from concept to fully deployed applications, utilizing my expertise to transform mock wireframes into polished realities.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
