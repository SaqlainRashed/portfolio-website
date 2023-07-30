import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import appImg from '../public/assets/images/project-5.png';
import cryptoImg from '../public/assets/images/project-2.png'; 
import leafImg from '../public/assets/images/project-3.png';
import flowerImg from '../public/assets/images/project-4.png';

const Freelance = () => {

  const projects = [
    {
      title: 'Consultancy Website',
      img: appImg, 
      url: 'https://uecpl.co.in/',
      tech: 'React, JavaScript, Html, Css'
    },
    {
      title: 'Brand Management', 
      img: cryptoImg,
      url: 'https://xtremead.in/',
      tech: 'React, Express, GitHub Actions, Digital Ocean'
    },
    {
      title: 'Casino Website',
      img: leafImg,
      url: 'https://www.247casino.info/', 
      tech: 'React, Sanity, Google Analytics, GitHub Actions, Digital Ocean'
    },
    {
      title: 'Creator Service',
      img: flowerImg, 
      url: 'https://tmmt.in/',
      tech: 'React, Express, Google Analytics, GitHub Actions, Digital Ocean'
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold pb-4">Freelance Projects</h1>

      <p className="text-lg pb-8">
        Explore my portfolio of freelance projects:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      
        {projects.map(project => (
          <div key={project.title} className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">

            <Image 
              className="rounded-xl group-hover:opacity-10"
              src={project.img}
              alt={project.title} 
            />

            <div className="absolute hidden translate-x-[-50%] translate-y-[-50%] group-hover:block top-[50%] left-[50%]">
              <h3 className="text-xl lg:text-2xl text-white tracking-wider text-center">
                {project.title}  
              </h3>
              
              <p className="pb-4 lg:pb-4 pt-2 lg:pt-2 text-white text-center text-xs lg:text-base">
                {project.tech}
              </p>
              
              <Link href={project.url}>
                <p className="text-center py-2 px-4 rounded-lg bg-white text-gray-700 font-bold text-base lg:text-lg cursor-pointer">
                  Visit
                </p>
              </Link>
              
            </div>

          </div>
        ))}
        
      </div>

    </div>
  );
};

export default Freelance;





// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// const FreelanceItem = ({ title, backgroundImg, tech, projectUrl }) => {
//   return (
//     <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
//       <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' />
//       <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
//         <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
//         <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
//         <Link href={projectUrl}>
//           <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Visit</p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default FreelanceItem;
















// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import appImg from '../public/assets/images/project-5.png';
// import cryptoImg from '../public/assets/images/project-2.png';
// import leafImg from '../public/assets/images/project-3.png';
// import flowerImg from '../public/assets/images/project-4.png';
// import FreelanceItem from './freelanceItems';

// const Freelance = () => {
//   return (
//     <div>
//       <h1 className='text-4xl pt-[15vh] text-center font-bold'>Freelance Projects</h1>
//       <p className='text-lg text-center'>These are some of my most recent freelanced projects.</p>

//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8 mx-4 lg:mx-12'>
//         <FreelanceItem
//           title='Project 1'
//           backgroundImg={appImg}
//           projectUrl='https://uecpl.co.in/'
//           tech='Technologies: React, Node.js'
//         />
//         <FreelanceItem
//           title='Project 2'
//           backgroundImg={cryptoImg}
//           projectUrl='https://xtremead.in/'
//           tech='Technologies: Angular, MongoDB'
//         />
//         <FreelanceItem
//           title='Project 3'
//           backgroundImg={leafImg}
//           projectUrl='https://www.247casino.info/'
//           tech='Technologies: Vue.js, PostgreSQL'
//         />
//         <FreelanceItem
//           title='Project 4'
//           backgroundImg={flowerImg}
//           projectUrl='https://tmmt.in/'
//           tech='Technologies: Laravel, MySQL'
//         />
//       </div>
//     </div>
//   );
// };

// export default Freelance;







// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import pro1Img from '../public/assets/images/project-1.png';
// import pro2Img from '../public/assets/images/project-2.png';
// import pro3Img from '../public/assets/images/project-3.png';
// import pro4Img from '../public/assets/images/project-4.png';

// const Freelance = () => {
//   return (
//     <div>
//       <h1 className='text-4xl font-bold'>Freelance Projects</h1>
//       <p className='text-lg'>Explore my portfolio of freelance projects.</p>

//       <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-8'>
//         <div className='group relative'>
//           <Image src={pro1Img} alt='Project 1' layout='responsive' width={400} height={300} />
//           <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
//             <h3 className='text-2xl text-white tracking-wider text-center'>Project 1</h3>
//             <p className='pb-4 pt-2 text-white text-center'>Technologies: React, Node.js</p>
//             <Link href='/project1'>
//               <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
//             </Link>
//           </div>
//         </div>
//         <div className='group relative'>
//           <Image src={pro2Img} layout='responsive' width={400} height={300} />
//           <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
//             <h3 className='text-2xl text-white tracking-wider text-center'>Project 2</h3>
//             <p className='pb-4 pt-2 text-white text-center'>Technologies: Angular, MongoDB</p>
//             <Link href='/project2'>
//               <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
//             </Link>
//           </div>
//         </div>
//         <div className='group relative'>
//           <Image src={pro3Img} alt='Project 3' layout='responsive' width={400} height={300} />
//           <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
//             <h3 className='text-2xl text-white tracking-wider text-center'>Project 3</h3>
//             <p className='pb-4 pt-2 text-white text-center'>Technologies: Vue.js, PostgreSQL</p>
//             <Link href='/project3'>
//               <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
//             </Link>
//           </div>
//         </div>
//         <div className='group relative'>
//           <Image src={pro4Img} alt='Project 4' layout='responsive' width={400} height={300} />
//           <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
//             <h3 className='text-2xl text-white tracking-wider text-center'>Project 4</h3>
//             <p className='pb-4 pt-2 text-white text-center'>Technologies: Laravel, MySQL</p>
//             <Link href='/project4'>
//               <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Freelance;
