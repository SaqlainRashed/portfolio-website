import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectItem = ({title, backgroundImg, tech, projectUrl}) => {

  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">

      <Image className="rounded-xl group-hover:opacity-10" src={backgroundImg} alt="/" />

      <div className="absolute hidden translate-x-[-50%] translate-y-[-50%] group-hover:block top-[50%] left-[50%]">

        <h3 className="text-xl lg:text-2xl text-white tracking-wider text-center">
          {title}
        </h3>

        <p className="pb-4 lg:pb-4 pt-2 lg:pt-2 text-white text-center text-xs lg:text-base">
          {tech}
        </p>

        <Link href={projectUrl}>
          <p className="text-center py-2 px-4 rounded-lg bg-white text-gray-700 font-bold text-base lg:text-lg cursor-pointer">
            More Info  
          </p>
        </Link>

      </div>

    </div>
  );
};

export default ProjectItem;