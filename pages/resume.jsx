import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Saqlain Rashid | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Saqlain Rashid</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/saqlain-rashid/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/SaqlainRashed'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a href='https://github.com/SaqlainRashed'
              target='_blank'
              rel='noreferrer'
              className='inline-flex font-bold items-center'>
              <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
              <span>Download</span></a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Web Development <span className='px-1'>|</span> App Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>App Developement</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>PHP
            <span className='px-2'>|</span>HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Bootstrap<br></br>
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>WordPress
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS<br></br>
            <span className='px-2'>|</span>Node JS
            <span className='px-2'>|</span>MySQL
            <span className='px-2'>|</span>MongoDB
            <span className='px-2'>|</span>Tailwind<br></br>
            <span className='px-2'>|</span>Firebase
          </p>
          <p className='py-2'>
            <span className='font-bold'>Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services
            <span className='px-2'>|</span>DigitalOcean Web Services
          </p>
        </div>
        
        <h5 className='text-center underline text-[18px] py-4'>
          Educational History
        </h5>
        {/* Experience */}
        
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Techno India University
            </span>
            <span className='px-2'>|</span>Kolkata, West Bengal
          </p>
          <p className='py-1 italic'>B.Tech CSE-AI (2020 - Current)</p>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            St. Francis Xavier School
            </span>
            <span className='px-2'>|</span>Kolkata, West Bengal
          </p>
          <p className='py-1 italic'>ISC | PCM with Computer Science (2018 - 2020)</p>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Harvard House High School
            </span>
            <span className='px-2'>|</span>Kolkata, West Bengal
          </p>
          <p className='py-1 italic'>ICSE | PCMB with Computer Application (2005 - 2018)</p>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>

         {/* Personal Experience */}
         <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Technical Intern
            </span>
            <span className='px-2'>|</span>Salt Lake, West Bengal
          </p>
          <p className='py-1 italic'>EDUQUIS TECHNOLOGIES PRIVATE LIMITED (October, 2022 - June, 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Core Team Member of R&D Team.
            </li>
            <li>
            Worked on the Flight Controller Software of DRONE. Closely worked with Ardu Pilot, Jiyi K++V2 FC.
            </li>
            <li>
            Development from scratch an offboard Checksum Verification system for the drone, public key & private key integration
            </li>
            <li>
            Worked on Embedded systems and multiple SBC including rasberry-pi, orange-pi, lattepanda
            </li>
            <li>
            Worked on python, micro-python, and c to develope IOT based products.
            </li>
            <li>
            Cultivated and maintained up-to-date industry and technical knowledge of all related fields to better solve customer issues. 
            </li>
            <li>
            Project Lead of Multiple Full stack projects. 
            </li>
          </ul>
        </div>

         <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Full Stack Developer Intern
            </span>
            <span className='px-2'>|</span>Remote
          </p>
          <p className='py-1 italic'>XiraInfotech (April, 2022 - September, 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Description Build 13+ complete end to end projects for clients. 
            </li>
            <li>
            Project Lead of 6 client projects. 
            </li>
            <li>
            Tech Stack used HTML, CSS, Bootstrap, Javascript, React, Express, MONGODB, MYSQL, Next.js, Tailwind.
            </li>
            <li>
            PHP Database administration and website design Built the logic for a streamlined ad-serving platform that scaled Planned, developed, tested, deployed, and maintained web applications for different clients
            </li>
          </ul>
        </div>
        
         <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Teaching Assistant
            </span>
            <span className='px-2'>|</span>Remote
          </p>
          <p className='py-1 italic'>Coding Ninjas (January, 2022 - March, 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Provided helpful teaching support to students struggling with different topics of DSA in C++ and Java. Utilized effective teaching methods to see greater results.
            </li>
            <li>
            Educational Institutions and Online classroom Management Development
            </li>
            <li>
            Knowledge-based Systems Architecture
            </li>
          </ul>
        </div>
      
        
      </div>
    </>
  );
};

export default resume;
