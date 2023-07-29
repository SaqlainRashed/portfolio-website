import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import appImg from '../public/assets/projects/app.jpg';
import freelanceImg from '../public/assets/projects/freelance.png'
import tlmImg from '../public/assets/projects/tlm.jpg'
import leafImg from '../public/assets/projects/Leaf Disease Prediction.png'
import flowerImg from '../public/assets/projects/Flower Recognition.png'
import lmsImg from '../public/assets/projects/Library Management System.png'
import todoImg from '../public/assets/projects/todo.png';
import gatherhubImg from '../public/assets/projects/gatherhub.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Event Management App'
            backgroundImg={gatherhubImg}
            projectUrl='/gatherhub'
            tech='React JS'
          />
          <ProjectItem
            title='TO-DO List'
            backgroundImg={todoImg}
            projectUrl='/todo'
            tech='React, Node, Express, MongoDB'

          />
          <ProjectItem
            title='Library Management System'
            backgroundImg={lmsImg}
            projectUrl='/lms'
            tech='PHP, MySQL, JavaScript'
          />
          <ProjectItem
            title='Freelance work'
            backgroundImg={freelanceImg}
            projectUrl='/freelance'
            tech='React JS, Express, Node, Sanity, GitHub Actions, CICD, React-Google Analytics-4, React-Helmet'

          />
          <ProjectItem
            title='360 Pandal Viewer App'
            backgroundImg={appImg}
            projectUrl='/app'
            tech='Android Studio, Java & Kulaa'

          />
          <ProjectItem
            title='Tea Leaf Manupulator'
            backgroundImg={tlmImg}
            projectUrl='/tlm'
            tech='Fusion 360, Python'

          />
          <ProjectItem
            title='Plant Leaf Disease Detection'
            backgroundImg={leafImg}
            projectUrl='/plantleaf'
            tech='Image Procession Python'

          />
          <ProjectItem
            title='Flower Detection'
            backgroundImg={flowerImg}
            projectUrl='/flower'
            tech='tensorflow numpy python'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
